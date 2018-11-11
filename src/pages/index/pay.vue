<template>
  <div class="container">
    <div class="contentBody">
      <van-cell-group>
        <van-cell center="true" :title="'团长:'+my_partner.nickname">
          <img slot="right-icon" :src="my_partner.headimgurl" style="border-radius:50%;width:80rpx;height:80rpx;" />
        </van-cell>
        <van-cell :title="'团长地址:'+my_partner.LocationAddress" icon="location" is-link>
          <van-icon slot="right-icon" name="search" class="van-cell__right-icon" />
        </van-cell>
      </van-cell-group>
      <van-card v-for="x in cartItems" lazy-load="true" :key="x" :tag="x.BuyItem.Type" :desc="x.BuyItem.ShareDesc" :title="x.BuyItem.Name" :thumb="x.BuyItem.LogoList[0]+'!w100h100'" :num="x.Count" :origin-price="x.BuyItem.Price" :price="x.BuyItem.VipPrice">
        <view slot="footer">
          <van-stepper min="1" :value="x.Count" :max="x.BuyItem.LimitBuyCount||'-'" @plus="add(x)" @minus="remove(x)" />
        </view>
        <view slot="tags">
        </view>
      </van-card>
      <van-submit-bar :disabled="totalVipPrice<=0" :price="totalVipPrice*100" button-type="primary" button-text="微信支付" @submit="onSubmit">
        <van-tag type="danger" v-if="youhuan>0">省 {{youhuan}}元</van-tag>
      </van-submit-bar>
      <demo-block title="收货方式">
        <van-cell :title="cartItems[0].BuyItem.PickUpType" />
      </demo-block>
      <demo-block title="收货地址" v-if="cartItems[0].BuyItem.PickUpType=='团长提货送货'||cartItems[0].BuyItem.PickUpType=='商家送货'">
        <van-cell-group>
          <van-cell :title="address||'选择收货地址'" clickable icon="location" @click="setAddress">
            <van-icon slot="right-icon" name="search" class="van-cell__right-icon" />
          </van-cell>
          <van-cell :title="'联系电话: '+telphone" clickable icon="phone" v-if="telphone" @click="setAddress" />
        </van-cell-group>
      </demo-block>
    </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";
import Toast from "../../../static/dist/toast/toast";
export default {
  onLoad() {
    wx.setNavigationBarTitle({ title: "购物车" });
  },
  onReady() {},
  data: {
    address: "",
    telphone: ""
  },
  mounted() {},
  computed: {
    ...mapState([
      "userInfo",
      "total",
      "totalPrice",
      "totalVipPrice",
      "cartItems",
      "my_partner"
    ]),
    youhuan() {
      return this.totalPrice - this.totalVipPrice;
    }
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(["add_to_cart"]),
    setAddress() {
      let that = this;
      wx.chooseAddress({
        success: function(res) {
          that.address = res.provinceName + res.cityName + res.detailInfo;
          that.telphone = res.telNumber;
          // console.log(res.userName);
          // console.log(res.postalCode);
          // console.log(res.provinceName);
          // console.log(res.cityName);
          // console.log(res.countyName);
          // console.log(res.detailInfo);
          // console.log(res.nationalCode);
          // console.log(res.telNumber);
        }
      });
    },
    add(item) {
      item.Count += 1;
      this.add_to_cart(item);
    },
    remove(item) {
      if (item.Count > 1) {
        item.Count -= 1;
        this.add_to_cart(item);
      }
      item.Count = 1;
    },
    onSubmit() {
      let thta = this;
      const itemId = this.cartItems[0].BuyItem_Id;
      const count = this.cartItems[0].Count;
      const partnerId = this.cartItems[0].Partner_Id;
      this.$api
        .getPay(itemId, partnerId, count, this.address, this.telphone)
        .then(obj => {
          wx.requestPayment({
            //相关支付参数
            timeStamp: obj.timeStamp,
            nonceStr: obj.nonceStr,
            package: "prepay_id=" + obj.prepay_id,
            signType: obj.signType,
            paySign: obj.paySign,
            success: function(res) {
              Toast.success("支付成功");
              setTimeout(() => {
                this.$navigate.To("/pages/order?index=1")
              }, 1500);
            },
            fail: function(res) {
              Toast.fail("支付失败");
            }
          });
        });
    }
  }
};
</script>

<style scoped>
</style>
