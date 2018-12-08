<template>
  <div style="margin:15rpx">
    <van-card :tag="data.PickUpType" :num="data.count" :lazy-load="true" :price="data.price/100" :title="'#'+data.Id+' '+data.body" class="card" :thumb="data.LogoImgUrl?data.LogoImgUrl+'!w100h100':'/static/images/no-image.png'">
      <view slot="tags" class="tags">
        <div v-if="data.Address">地址:{{data.Address}}</div>
        <div v-if="data.TelPhone">电话:{{data.TelPhone}}</div>
        <!-- <div>
          提货方式:
          <van-tag round type="primary">{{data.PickUpType}}</van-tag>
        </div> -->
        <div>
          合计:<span class="price">￥{{data.totalprice/100}}</span>
        </div>
      </view>
      <view slot="footer" class="footer">
        <block v-if="type==='user'">
          <!-- <van-button size="small" type="primary" v-if="!data.IsSuccessPay" @click="pay(data.Id)">付款</van-button> -->
        </block>
        <block v-if="type==='partner'">
          <van-button size="small" type="primary" v-if="data.IsSuccessPay && !data.IsCheckOut && data.PickUpType === '团长处自提' && data.ProductState !== '可取货'" @click="pick(data.Id)">通知取货</van-button>
        </block>
        <block v-if="type==='shop'">
          <van-button size="small" type="primary" v-if="data.IsSuccessPay && !data.IsCheckOut && data.PickUpType === '到店自提'">通知取货</van-button>
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
