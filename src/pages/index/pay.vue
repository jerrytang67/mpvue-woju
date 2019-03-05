<template>
  <div class="container">
    <div class="contentBody">
      <van-cell-group>
        <van-cell
          center="true"
          :title="'团长:'+my_partner.nickname"
        >
          <img
            slot="right-icon"
            :src="my_partner.headimgurl"
            style="border-radius:50%;width:80rpx;height:80rpx;"
          >
        </van-cell>
        <van-cell
          :title="'团长地址:'+my_partner.LocationAddress"
          icon="location"
          is-link
        >
          <van-icon
            slot="right-icon"
            name="search"
            class="van-cell__right-icon"
          />
        </van-cell>
      </van-cell-group>
      <div  v-for="(x,index) in cartItems" :key="index">
        <van-card
          lazy-load="true"
          :thumb="x.BuyItem.LogoList[0]+'!w100h100'"
          :num="x.Count"
          :origin-price="x.BuyItem.Price"
          :price="x.BuyItem.VipPrice"
        >
          <view
            slot="title"
            class="title"
          >{{x.BuyItem.Name}}</view>
          <view
            slot="desc"
            class="desc"
            v-if="x.BuyItem.ShareDesc"
          >{{x.BuyItem.ShareDesc}}</view>
          <view slot="footer">
            <view v-if="x.BuyItem.CountItems && x.BuyItem.CountItems.length>0">
              <div
                style="margin:20rpx 0;"
                class="flex-between"
                v-for="(y,index2) in x.BuyItem.CountItems"
                :key="index2"
              >
                <van-tag
                  plain
                  size="large"
                  type="primary"
                >{{y.Name}} ￥{{y.Price}}元</van-tag>
                <van-stepper
                  :min="0"
                  :value="y.Count"
                  @plus="add(y)"
                  @minus="remove(y)"
                />
              </div>
            </view>
            <view v-else>
              <!-- {{x.BuyItem.LimitBuyCount>0}} 这里step有个BUG不能用?:来赋值'-'所以用了v-if分2个输出 -->
              <van-stepper
                v-if="x.BuyItem.LimitBuyCount>0"
                :min="1"
                :max="x.BuyItem.LimitBuyCount"
                :value="x.Count"
                @plus="add(x)"
                @minus="remove(x)"
              />
              <van-stepper
                v-if="x.BuyItem.LimitBuyCount===0"
                :min="1"
                :value="x.Count"
                @plus="add(x)"
                @minus="remove(x)"
              />
            </view> <!-- end else -->
          </view>
          <view slot="tags">
            <van-tag
              round
              type="primary"
              v-if="x.BuyItem.LimitBuyCount==0"
            >不限购</van-tag>
            <van-tag
              round
              type="primary"
              v-else
            >每人限购{{x.BuyItem.LimitBuyCount}}件</van-tag>
          </view>
        </van-card>
        <van-notice-bar :text="x.BuyItem.NoticeText" v-if="x.BuyItem.NoticeText"/>
      </div>
      <van-submit-bar
        :disabled="totalVipPrice<=0"
        :price="totalVipPrice*100"
        button-type="primary"
        button-text="微信支付"
        @submit="onSubmit"
      >
        <van-tag
          type="danger"
          v-if="youhuan>0"
        >省 {{youhuan}}元</van-tag>
      </van-submit-bar>
      <demo-block title="收货方式">
        <van-cell :title="cartItems[0].BuyItem.PickUpType" />
      </demo-block>
      <demo-block
        title="收货地址"
        v-if="cartItems[0].BuyItem.PickUpType=='团长提货送货'||cartItems[0].BuyItem.PickUpType=='商家送货'"
      >
        <van-cell-group>
          <van-cell
            :title="address||'选择收货地址'"
            clickable
            icon="location"
            @click="setAddress"
          >
            <van-icon
              slot="right-icon"
              name="search"
              class="van-cell__right-icon"
            />
          </van-cell>
          <van-cell
            :title="'联系电话: '+telphone"
            clickable
            icon="phone"
            v-if="telphone"
            @click="setAddress"
          />
          <van-cell
            :title="'收货人: '+userName"
            clickable
            icon="user"
            v-if="userName"
            @click="setAddress"
          />
        </van-cell-group>
      </demo-block>
      <demo-block
        title="联系方式"
        v-if="cartItems[0].BuyItem.PickUpType=='到店自提'||cartItems[0].BuyItem.PickUpType=='团长处自提'"
      >
        <van-cell-group>
          <van-cell
            :title="address||'选择联系方式'"
            clickable
            icon="location"
            @click="setAddress"
          >
            <van-icon
              slot="right-icon"
              name="search"
              class="van-cell__right-icon"
            />
          </van-cell>
          <van-cell
            :title="'联系电话: '+telphone"
            clickable
            icon="phone"
            v-if="telphone"
            @click="setAddress"
          />
          <van-cell
            :title="'联系人: '+userName"
            clickable
            icon="user"
            v-if="userName"
            @click="setAddress"
          />
        </van-cell-group>
      </demo-block>

      <demo-block
        title="备注"
        style="margin-bottom:20vh"
      >
        <van-cell-group>
          <van-field
            :value="comment"
            label="备注"
            type="textarea"
            required
            autosize
            @change="onChange"
            data-name="comment"
          />
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
import Dialog from "../../../static/dist/dialog/dialog";

export default {
  onLoad() {
    wx.setNavigationBarTitle({ title: "购物车" });
  },
  onReady() {},
  data: {
    address: "",
    telphone: "",
    userName: "",
    comment: "",
    pList: {}
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
          that.userName = res.userName;

          // console.log(res.userName);
          // console.log(res.postalCode);
          // console.log(res.provinceName);
          // console.log(res.cityName);
          // console.log(res.countyName);
          // console.log(res.detailInfo);
          // console.log(res.nationalCode);
          // console.log(res.telNumber);
        },
        fail: function() {
          Dialog.confirm({
            message: "由于您没有授权获取地址,是否去设置?",
            confirmButtonOpenType: "openSetting"
          })
            .then(() => {
              wx.openSetting({
                success(res) {
                  console.log(res.authSetting);
                }
              });
            })
            .catch(() => {
              Toast.fail("打开设置失败了");
            });
        }
      });
    },
    onChange(e) {
      let value = e.mp.detail.value || e.mp.detail;
      this.comment = value;
    },
    add(item) {
      var that = this;
      console.log(item);
      item.Count += 1;
      const _id = `${item.Id}_${item.Count}`;
      that.pList = Object.assign({}, that.pList, { id: _id, value: "" });
      that.add_to_cart(this.cartItems[0]);
    },
    remove(item) {
      console.log(item);
      if (item.Count > 0) {
        item.Count -= 1;
        this.add_to_cart(this.cartItems[0]);
      }
    },
    onSubmit() {
      let that = this;
      if (!that.userName || !that.telphone) {
        Toast.fail("请填写联系信息或收货地址");
        return;
      }

      const itemId = this.cartItems[0].BuyItem_Id;
      const count = this.cartItems[0].Count;
      const partnerId = this.cartItems[0].Partner_Id;
      const countItems = this.cartItems[0].BuyItem.CountItems;

      const payData = {
        itemId: this.cartItems[0].BuyItem_Id,
        count: this.cartItems[0].Count,
        partner_Id: this.cartItems[0].Partner_Id,
        countItems: this.cartItems[0].BuyItem.CountItems.filter(
          z => z.Count > 0
        ),
        address: that.address,
        telphone: that.telphone,
        userName: that.userName,
        comment: that.comment
      };
      this.$api.postPay(payData).then(obj => {
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
              that.$navigate.To("/pages/order?index=1");
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
