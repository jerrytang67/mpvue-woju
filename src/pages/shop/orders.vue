<template>
  <div class="container">
    <div style="width:100%;background:#fff;">
      <van-tabs :active="selectIndex">
        <van-tab title="已付款">
          <order v-for="x in orders" v-if="x.IsSuccessPay && !x.IsCheckOut && x.ProductState === 'Default'" :key="x" :data="x" type="shop"></order>
        </van-tab>
        <van-tab title="待取货">
          <order v-for="x in orders" v-if="x.IsSuccessPay && !x.IsCheckOut && x.ProductState === '可取货'" :key="x" :data="x" type="shop"></order>
        </van-tab>
        <van-tab title="已完成">
          <order v-for="x in orders" v-if="x.IsSuccessPay &&x.IsCheckOut" :key="x" :data="x" type="shop"></order>
        </van-tab>
      </van-tabs>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import order from "@/components/order";
import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad(options) {
    console.log(options);
    if (!options.shopId) wx.navigateBack();
    wx.setNavigationBarTitle({ title: options.shopName + " 订单列表" });
  },
  onReady() {},
  components: {
    order
  },
  mounted() {
    this.getorder();
  },
  data: {
    selectIndex: 0
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