<template>
<view class="box" @click.stop="go(data)">
  <image :src="img" class="bd" />
  <view class="main">
    <text class="title">{{title}}</text>
    <view class="origin-price-wrap">
      <text class="counter-price">专柜价：</text>
      <text class="origin-price">¥{{price}}</text>
    </view>
    <!-- <view class="money-wrap">
      <text class="voucher">券</text>
      <image src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/5619ee80111b11e9987a5dfd837c1d9b.png" class="vertical-line" />
      <text class="money">¥10000</text>
    </view> -->
  </view>
  <view class="ft">
    <view class="group">
      <!-- <image src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/55e91a80111b11e99b62d75a0b6219d7.png" class="logo" /> -->
      <view class="price-wrap">
        <text class="rmb">¥</text>
        <text class="price">{{vipPrice}}</text>
      </view>
    </view>
    <text class="location">{{pickUpType}}</text>
    <view class="tag-wrap">
      <text class="tag"  >立即购买</text>
    </view>
  </view>
</view>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["data"],
  data() {
    return {
      img: this.data.BuyItem.LogoList[0] + "!w500w",
      title: this.data.BuyItem.Name,
      price: this.data.BuyItem.Price,
      vipPrice: this.data.BuyItem.VipPrice,
      pickUpType :this.data.BuyItem.PickUpType
    };
  },
  methods: {    
    go(x) {
      if (x) {
        wx.navigateTo({ url: "/pages/item/itemDetail?id=" + x.BuyItem.Id });
      }
    }}
};
</script>
<style scoped>
.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #ffffff;
  width: 714rpx;
  height: 534rpx;
  overflow: hidden;
}
.bd {
  width: 714rpx;
  height: 357rpx;
}
.main {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 17rpx;
  margin-left: 15rpx;
  width: 699rpx;
  height: 68rpx;
}
.title {
  max-width: 460rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 37rpx;
  white-space: nowrap;
  color: #333333;
  font-family: PingFangSC;
  font-size: 26rpx;
  font-weight: 400;
}
.origin-price-wrap {
  display: flex;
  flex-direction: row;
  margin-top: 1rpx;
  height: 28rpx;
}
.counter-price {
  text-align: left;
  line-height: 28rpx;
  white-space: nowrap;
  color: #999999;
  font-family: PingFangSC;
  font-size: 20rpx;
  font-weight: 400;
}
.origin-price {
  max-width: 380rpx;
  overflow: hidden;
  text-align: left;
  text-decoration: line-through;
  text-overflow: ellipsis;
  line-height: 28rpx;
  white-space: nowrap;
  color: #999999;
  font-family: PingFangSC;
  font-size: 20rpx;
  font-weight: 400;
}
.money-wrap {
  display: flex;
  position: absolute;
  top: 6rpx;
  right: 16rpx;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  border-width: 1rpx;
  border-style: solid;
  border-radius: 4rpx;
  border-color: #FF0036;
  background-color: rgba(255,0,54,0.10);
  width: 200rpx;
  height: 60rpx;
  box-sizing: border-box;
}
.voucher {
  margin-top: 14rpx;
  line-height: 33rpx;
  white-space: nowrap;
  color: #ff0036;
  font-family: PingFangSC;
  font-size: 24rpx;
  font-weight: 400;
}
.vertical-line {
  margin-top: 5rpx;
  margin-left: 19rpx;
  width: 2rpx;
  height: 54rpx;
}
.money {
  margin-top: 15rpx;
  margin-left: 28rpx;
  line-height: 33rpx;
  white-space: nowrap;
  color: #ff0036;
  font-family: PingFangSC;
  font-size: 24rpx;
  font-weight: 400;
}
.ft {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -1rpx;
  margin-left: 15rpx;
  width: 699rpx;
  height: 77rpx;
}
.group {
  display: flex;
  flex-direction: row;
  width: 472rpx;
  height: 41rpx;
}
.logo {
  margin-top: 7rpx;
  margin-left: 1rpx;
  width: 90rpx;
  height: 24rpx;
}
.price-wrap {
  display: flex;
  flex-direction: row;
  margin-left: 10rpx;
  height: 42rpx;
}
.rmb {
  text-align: left;
  line-height: 42rpx;
  white-space: nowrap;
  color: #FF0036;
  font-family: PingFangSC;
  font-size: 20rpx;
  font-weight: 400;
}
.price {
  margin-left: 7rpx;
  max-width: 340rpx;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 42rpx;
  white-space: nowrap;
  color: #FF0036;
  font-family: PingFangSC;
  font-size: 30rpx;
  font-weight: 600;
}
.location {
  margin-top: 2rpx;
  max-width: 460rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 33rpx;
  white-space: nowrap;
  color: #ff0036;
  font-family: PingFangSC;
  font-size: 24rpx;
  font-weight: 400;
}
.tag-wrap {
  display: flex;
  position: absolute;
  top: 10rpx;
  right: 16rpx;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
  border-radius: 4rpx;
  background-color: #ff0036;
  width: 200rpx;
  height: 60rpx;
}
.tag {
  margin-top: 15rpx;
  max-width: 188rpx;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  line-height: 33rpx;
  white-space: nowrap;
  color: #ffffff;
  font-family: PingFangSC;
  font-size: 24rpx;
  font-weight: 400;
}
</style>
