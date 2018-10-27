<template>
    <div class="container">
      <div class="contentBody" >
        <div style="padding:20rpx;">
          <van-card v-for="x in shopBuyItems" 
      lazy-load="true" :key="x" :tag="x.Type" :desc="x.ShareDesc" :title="x.Name" :thumb="x.LogoList[0]+'!w100h100'" :origin-price="x.Price" :price="x.VipPrice" >
          <view slot="footer">
            <van-button size="small" type="primary">编辑</van-button>
          </view>
          <view slot="tags">

          </view>
        </van-card>
        </div>

      </div>
    <van-toast id="van-toast" />
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad(options) {
    console.log(options);
  },
  onReady() {
    this.shopBuyItems = [];
    this.shopId = this.$root.$mp.query.shopId;
  },
  mounted() {
    this.getItems();
  },
  data: {
    shopId: null
  },
  computed: {
    ...mapState(["shopBuyItems", "openid"])
  },
  methods: {
    ...mapActions(["getShopBuyItems"]),
    getItems() {
      var that = this;
      that.getShopBuyItems({ shopId: this.$root.$mp.query.shopId });
    }
  },
  //下拉
  onPullDownRefresh: function() {
    this.getItems();
    wx.stopPullDownRefresh();
  }
};
</script>

<style lang="scss">
</style>