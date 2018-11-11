<template>
  <div class="container" style="background:#fff;">
    <div v-if="shop" style="width:100%;">
      <image :src="shop.LogoImageUrl+'!w500'" class="slide-image" mode="aspectFill" @click="previewImage($index)" />
      <demo-block :title="shop.ShopName">
        {{shop.ShopAddress}}
      </demo-block>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "@/utils/index";
import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad(options) {
    if (!options.shopId) wx.navigateBack();
    this.load();
  },
  onPullDownRefresh: function() {
    this.load();
    wx.stopPullDownRefresh();
  },
  data: {
    shop: {},
    c: 1
  },
  methods: {
    load() {
      const that = this;
      const shopId = this.$root.$mp.query.shopId;
      this.$api.getShop({ shopId }).then(res => {
        that.shop = res;
      });
    }
  }
};
</script>

<style>
</style>
