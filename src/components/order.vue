<template>
<div style="margin:15rpx">
  <van-card :num="data.count" :price="data.price/100" :title="'#'+data.Id+' '+data.body" class="card"
  :thumb="data.LogoImgUrl?data.LogoImgUrl+'!w100h100':'/static/images/no-image.png'">
    <view slot="tags" class="tags">
      <div>
      提货方式:
      <van-tag round type="primary">{{data.PickUpType}}</van-tag>
      </div>
      <div>
        合计:<span class="price">￥{{data.totalprice/100}}</span>
      </div>
      </view>
    <view slot="footer" class="footer">
      <block v-if="type==='user'">
        <van-button size="small" type="primary" v-if="!data.IsSuccessPay" @click="pay">付款</van-button>
      </block>
      <block v-if="type==='partner'">
        <van-button size="small" type="primary" v-if="data.IsSuccessPay">通知用户取货</van-button>
      </block>
      <block v-if="type==='shop'">
        <van-button size="small" type="primary" v-if="data.IsSuccessPay">发货</van-button>
      </block>
    </view>
  </van-card>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["data", "type"],
  computed: {
    ...mapState(["openid"])
  },
  methods: {
    pay(e) {
      console.log(this.openid);
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.tags {
  margin-top: 32rpx;
  display: flex;
  flex-direction: column;
  .price {
    color: #f00;
    font-size: 32rpx;
  }
}
.van-card__title {
  font-size: 32rpx;
}
</style>
