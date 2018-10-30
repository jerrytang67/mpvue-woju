<template>
    <div class="container">
      <div class="contentBody" >
        <div style="padding:20rpx;">
          <van-card v-for="x in shopBuyItems" class="card"
      lazy-load="true" :key="x" :tag="x.Type" :desc="x.ShareDesc" :title="x.Name" :thumb="x.LogoList[0]+'!w100h100'" :origin-price="x.Price" :price="x.VipPrice" >
          <view slot="footer" class="footer">
            <van-button size="small" type="primary">编辑</van-button>
            <van-button size="small" type="danger" @click="onDelete(x)">删除</van-button>
          </view>
          <view slot="tags">

          </view>
        </van-card>
        </div>

      </div>
    <van-toast id="van-toast" />
    <van-dialog id="van-dialog" />
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Tips from "@/utils/Tips";
import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad(options) {
    console.log(options);
    if (!options.shopId) wx.navigateBack();
    wx.setNavigationBarTitle({ title: options.shopName + " 商品列表" });
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
    ...mapActions(["getShopBuyItems","deleteBuyItem"]),
    getItems() {
      var that = this;
      that.getShopBuyItems({ shopId: this.$root.$mp.query.shopId });
    },
    //删除
    onDelete(item) {
      console.log("onDelete");
      console.log(item);
      Tips.confirm("删除后将不能恢复")
        .then(res => {
          this.deleteBuyItem(item.Id)
          // this.shopBuyItems = this.shopBuyItems.filter(z => z.Id != item.Id);
        })
        .catch(() => {
          console.log("no");
        });
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