<template>
    <div class="container">
      <div class="bodyContent" >
        <div style="padding:20rpx;">
                {{openid}}
        {{orders}}
      <div v-for="x in orders" :key="x">
          {{x.body}}
      </div>
        
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
  data: {
    moto: "asfdasdf"
  },
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