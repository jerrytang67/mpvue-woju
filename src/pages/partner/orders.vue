<template>
  <div class="container">
    <div style="width:100%;background:#fff;">
      <van-tabs :active="selectIndex">
        <van-tab :title="'未付款 '+orderNotPayCount">
          <order v-for="x in orderNotPay" :key="x" :data="x" type="partner"></order>
        </van-tab>
        <van-tab :title="'已付款 '+orderIsPayCount">
          <order v-for="x in orderIsPay" :key="x" :data="x" type="partner"></order>
        </van-tab>
        <van-tab :title="'待取货 '+orderCanTakeCount">
          <order v-for="x in orderCanTake" :key="x" :data="x" type="partner"></order>
        </van-tab>
        <van-tab :title="'已完成 ' +orderFinishCount">
          <order v-for="x in orderFinish" :key="x" :data="x" type="partner"></order>
        </van-tab>
      </van-tabs>
    </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import order from "@/components/order";
import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad(options) {
    wx.setNavigationBarTitle({ title: "团长 的订单列表" });
  },
  onReady() {},
  components: {
    order
  },
  mounted() {
    if (!this.partner.Id) wx.navigateBack();
    this.getorder();
  },
  data: {
    selectIndex: 0
  },
  computed: {
    ...mapState(["orders", "openid", "partner"]),
    ...mapGetters([
      "orderNotPay",
      "orderIsPay",
      "orderFinish",
      "orderCanTake",
      "orderNotPayCount",
      "orderIsPayCount",
      "orderFinishCount",
      "orderCanTakeCount"
    ])
  },
  methods: {
    ...mapActions(["getOrders"]),
    getorder() {
      var that = this;
      that.getOrders({ partnerId: this.partner.Id });
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