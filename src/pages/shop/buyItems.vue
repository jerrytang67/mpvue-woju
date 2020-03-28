<template>
  <div class="container">
    <div class="contentBody">
      <div style="padding:20rpx;">
        <van-card
          v-for="x in shopBuyItems"
          class="card"
          @click.stop="$navigate.To('/pages/item/itemDetail?id='+x.Id)"
          lazy-load="true"
          :key="x"
          :tag="x.Type"
          :thumb="x.LogoList[0]+'!w100h100'"
          :origin-price="x.Price"
          :price="x.VipPrice"
        >
          <view slot="footer" class="footer">
            <van-button
              size="small"
              type="primary"
              @click.stop="$navigate.To('/pages/shop/addItem?itemId='+x.Id)"
            >编辑</van-button>
            <van-button size="small" type="danger" @click.stop="onDelete(x)">删除</van-button>
          </view>
          <view slot="title" class="title">{{x.Name}}</view>
          <view slot="desc" class="desc" v-if="x.ShareDesc">{{x.ShareDesc}}</view>
          <view slot="tags" style="margin-top:24rpx;">
            <van-tag round type="primary">{{x.PickUpType}}</van-tag>

            <van-tag round type="primary" v-if="x.LimitBuyCount==0">不限购</van-tag>
            <van-tag round type="primary" v-else>限购{{x.LimitBuyCount}}件</van-tag>
          </view>
        </van-card>
      </div>
    </div>
    <van-toast id="van-toast"/>
    <van-dialog id="van-dialog"/>
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
    ...mapActions(["getShopBuyItems", "deleteBuyItem"]),
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
          this.deleteBuyItem(item.Id);
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