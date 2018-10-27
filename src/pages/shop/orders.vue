<template>
    <div class="container">
      <div class="contentBody" >
        <div style="padding:20rpx;">
          <van-card v-for="x in orders" lazy-load="true" :key="x" 
           :title="x.body" :num="x.count" :price="x.price/100" >
              <view slot="footer">
                  <van-button size="small" >接单</van-button>
                  <van-button size="small" >发货</van-button>
              </view>
              <view slot="tags">
                总价:
                <span style="color:#f00;">{{x.totalprice/100}}</span>
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
  onReady() {},
  mounted() {
    this.getorder();
  },
  data: {},
  computed: {
    ...mapState(["orders", "openid"])
  },
  methods: {
    ...mapMutations(["SET_ORDERS"]),
    ...mapActions(["getOrders"]),
    getorder() {
      var that = this;

      that.getOrders({ shopId: this.$root.$mp.query.shopId });
    }
  },

  //下拉
  onPullDownRefresh: function() {
    this.getorder();
    wx.stopPullDownRefresh();
  }
};
</script>

<style lang="scss">
</style>