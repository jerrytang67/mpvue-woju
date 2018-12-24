<template>
  <div style="margin:15rpx">
    <van-card
      :tag="data.PickUpType"
      :num="data.count"
      :price="data.price/100"
      class="card"
      :thumb="data.LogoImgUrl?data.LogoImgUrl+'!w100h100':'/static/images/no-image.png'"
      @click.stop="onClick(data)"
    >
      <view slot="title" class="title">#{{data.Id}} {{data.body}}</view>
      <view slot="tags" class="tags">
        <div>
          合计:
          <span class="price">￥{{data.totalprice/100}}</span>
        </div>
      </view>
      <view slot="footer" class="footer">
        <block v-if="type==='user'">
          <!-- <van-button size="small" type="primary" v-if="!data.IsSuccessPay" @click="pay(data.Id)">付款</van-button> -->
        </block>
        <block v-if="type==='partner'">
          <van-button
            size="small"
            type="primary"
            v-if="data.IsSuccessPay && !data.IsCheckOut && data.PickUpType === '团长处自提' && data.ProductState !== '可取货'"
            @click.stop="pick(data.Id)"
          >通知取货</van-button>
        </block>
        <block v-if="type==='shop'">
          <van-button
            size="small"
            type="primary"
            v-if="data.IsSuccessPay && !data.IsCheckOut && data.PickUpType === '到店自提'"
          >通知取货</van-button>
        </block>
      </view>
    </van-card>
    <van-popup :show="isShow" overlay="true" @close="onClose">
      <demo-block title="订单信息">
        <view style="width:90vw;padding:15px;">
          <div v-if="data.RealName">姓名:{{data.RealName}}</div>
          <div v-if="data.Address">地址:{{data.Address}}</div>
          <div v-if="data.TelPhone">电话:{{data.TelPhone}}</div>
          <div>提货方式:
            <van-tag type="primary">{{data.PickUpType}}</van-tag>
          </div>
          <div v-if="data.KeFuTel">
            商家客服电话: {{data.KeFuTel}}
            <van-button size="small" type="primary" @click="call">拨打</van-button>
          </div>
        </view>
      </demo-block>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["data", "type"],
  computed: {
    ...mapState(["openid"])
  },
  data() {
    return {
      isShow: false,
      selected: undefined
    };
  },
  methods: {
    call() {
      let that=this;
      wx.makePhoneCall({
        phoneNumber: that.data.KeFuTel //仅为示例，并非真实的电话号码
      });
    },
    onClick(item) {
      console.log(item);
      this.isShow = true;
    },
    onClose() {
      this.isShow = false;
    },
    pay(e) {
      console.log(this.openid);
      console.log(e);
    },
    pick(e) {
      console.log(e);
      this.$api.noticeToPickUP(e);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
.tags {
  display: flex;
  flex-direction: column;
  .price {
    color: $danger;
    font-size: $font-lg;
  }
}
.van-card__title {
  font-size: $font-lg;
}
</style>
