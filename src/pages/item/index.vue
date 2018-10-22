<template>
  <div class="container" style="background:#fff;">
      <swiper indicator-dots="true" autoplay="true" interval="2000" duration="1000" style="width:100vw;height:35vh;">
      <block v-for="x in currentItem.LogoList" :key="x">
        <swiper-item>
          <image :src="x+'!w500'" class="slide-image" style="width:100vw;" mode="aspectFill" />
        </swiper-item>
      </block>
    </swiper>
      <p>{{currentItem.Name}}</p>
      <p>原价:￥{{currentItem.Price}}</p>
      <p>优惠价:￥{{currentItem.VipPrice}}</p>
      <p>{{currentItem.DateTimeStart}}</p>
      <p>{{currentItem.DateTimeEnd}}</p>
      <view>
        <wxparser :rich-text="currentItem.Desc" />
      </view>
    <van-goods-action>
      <van-goods-action-icon icon="chat" text="客服"/>
      <van-goods-action-icon  @click="onClickIcon" icon="cart" text="购物车" :info="total>0?total:''"  />
      <van-goods-action-button @click="addCart" text="加入购物车" type="warning" />
      <van-goods-action-button text="立即购买" @click="getpay()"  />
    </van-goods-action>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "../../utils/index";
import Toast from "../../../static/dist/toast/toast";
export default {
  onLoad(options) {},
  onReady() {},
  mounted() {
    var that = this;
    that.SET_ITEM({});
    var id = this.$root.$mp.query.id;
    this.$api.getItemDetail({ id }).then(res => {
      console.log(res);
      that.SET_ITEM(res);
    });
  },
  computed: {
    ...mapState(["userInfo", "cartItems", "buyItems", "total", "currentItem"]),
    item() {
      var s = this.getItem();
      console.log(s);
      return s;
    }
  },
  methods: {
    ...mapMutations(["SET_ITEM"]),
    ...mapActions(["add_to_cart"]),
    getItem() {
      var current = this.buyItems.filter(
        z => z.BuyItem.Id == this.$root.$mp.query["id"]
      )[0];
      return current;
    },
    addCart() {
      // console.log(this.getItem());
      var item = this.getItem();
      if (item.BuyItem) {
        console.log(new Date(item.BuyItem.DateTimeEnd), new Date());
        if (new Date(item.BuyItem.DateTimeEnd) < new Date()) {
          Toast.fail("已结束");
          return;
        }
        item.Count += 1;
        this.add_to_cart(this.getItem());
      }
    },
    getpay() {
      this.$api.getPay(this.getItem().BuyItem.Id).then(obj => {
        if (obj.success) {
          console.log("getpay", obj);
          wx.requestPayment({
            //相关支付参数
            timeStamp: obj.timeStamp,
            nonceStr: obj.nonceStr,
            package: "prepay_id=" + obj.prepay_id,
            signType: obj.signType,
            paySign: obj.paySign,
            success: function(res) {
              Toast.success("支付成功");
            },
            fail: function(res) {
              Toast.fail("支付失败");
            }
          });
        } else {
          Toast.fail(obj.msg);
        }
      });
    },
    onClickButton() {},
    onClickIcon() {
      console.log("go to cart");
      wx.switchTab({ url: "/pages/cart/main" });
    }
  }
};
</script>

<style scoped>
</style>
