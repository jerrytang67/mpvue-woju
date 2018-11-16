<template>
  <div class="container">
    <div style="width:100%;background:#fff;">
      <van-tabs :active="selectIndex" @change="onTabChange">
        <van-tab :title="'待付款'">
          <order v-for="x in waitForPay" :key="x" :data="x" type="user"></order>
        </van-tab>
        <van-tab :title="'已付款'">
          <order v-for="x in paidOrder" :key="x" :data="x" type="user"></order>
        </van-tab>
        <van-tab :title="'可取货'">
          <order v-for="x in canTakeOrder" :key="x" :data="x" type="user"></order>
        </van-tab>
        <van-tab :title="'已完成'">
          <order v-for="x in finishOrder" :key="x" :data="x" type="user"></order>
        </van-tab>
      </van-tabs>
    </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { formatTime } from "@/utils/index";
import order from "@/components/order";
import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad(options) {
    if (options.index) this.selectIndex = options.index;
    wx.setNavigationBarTitle({ title: "我的订单" });
  },
  mounted() {
    console.log(wx.getStorageSync("Tab_Select_index"));
    this.selectIndex =
      wx.getStorageSync("Tab_Select_index") || this.selectIndex;
    this.get_setting();
  },
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh");
    this.get_setting().then(() => {
      setTimeout(() => {
        wx.stopPullDownRefresh();
      }, 500);
    });
  },
  data: {
    selectIndex: 0
  },
  computed: {
    ...mapGetters([
      "waitForPayCount",
      "paidOrderCount",
      "canTakeOrderCount",
      "waitForPay",
      "paidOrder",
      "canTakeOrder",
      "finishOrder"
    ])
  },
  components: {
    order
  },
  created() {},
  methods: {
    ...mapActions(["get_setting"]),
    onTabChange(event) {
      console.log(event);
      this.selectIndex = event.mp.detail.index;
    }
  }
};
</script>

<style>
</style>
