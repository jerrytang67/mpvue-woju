<template>
  <div class="container">
    <div style="background:#fff;width:100vw;">
      <van-tabs active="0">
        <van-tab title="我的商品">
            <van-card v-for="x in myBuyItems" 
        lazy-load="true" :key="x" :desc="x.BuyItem.ShareDesc" :title="x.BuyItem.Name" :thumb="x.BuyItem.LogoList[0]+'!w100h100'" :origin-price="x.BuyItem.Price" :price="x.BuyItem.VipPrice" >
            <view slot="footer">
              <van-button size="small" type="danger">删除</van-button>
            </view>
            <view slot="tags">
                <van-switch size="45rpx" :checked="x.State" @change="onChange(x)" />
            </view>
          </van-card>
        </van-tab>
        <!-- tab1end -->
        <van-tab title="店铺">
          <div style="display:flex;flex-direction:row;justify-content:start;">
            <scroll-view scroll-y style="height: calc(100vh - 44px);width:25vw;" >
              <van-badge-group :active="selectShopIndex" @change="onBadgeChange">
                <van-badge v-for="x in myShops" :key="x" :title="x.ShopName" info="3" />
              </van-badge-group>
            </scroll-view>
            <view>
              {{currentShop.ShopName}}
            </view>
          </div>

        </van-tab>
        <!-- tab2end -->
        <van-tab title="标签 3">内容 3</van-tab>
        <!-- tab3end -->
        <van-tab title="标签 4">内容 4</van-tab>
        <!-- tab4end -->
        <van-tab title="标签 5">内容 5</van-tab>
        <!-- tab5end -->
      </van-tabs>
    </div>
          <!-- <van-card v-for="x in orders" lazy-load="true" :key="x":title="x.body" :num="x.count" :price="x.price/100" >
              <view slot="footer">
                  <van-button size="small" >接单</van-button>
                  <van-button size="small" >发货</van-button>
              </view>
              <view slot="tags">
                总价:
                <span style="color:#f00;">{{x.totalprice/100}}</span>
              </view>
            </van-card> -->
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
  mounted() {
    this.get();
  },
  computed: {
    ...mapState(["openid", "myBuyItems", "myShops"])
  },
  data: {
    selectShopIndex: 1,
    currentShop: { ShopName: "no loaded" }
  },
  onReady() {},

  methods: {
    ...mapMutations(["SET_POSITION"]),
    ...mapActions(["getPartnerSetting"]),
    onChange(x) {
      console.log(x);
      x.State = !x.State;
    },
    onBadgeChange(e) {
      console.log(e);
      if (e.mp.detail >= 0) {
        this.currentShop = this.myShops[e.mp.detail];
        console.log(this.currentShop);
      }
    },
    get() {
      var that = this;
      wx.getLocation({
        type: "gcj02",
        success: function(res) {
          //save to store
          that.SET_POSITION(res);
          that.getPartnerSetting({ lat: res.latitude, lng: res.longitude });
        },
        fail: function(error) {
          Toast("必须授权定位才可查看团长");
        }
      });
    }
  },

  //下拉
  onPullDownRefresh: function() {
    this.get();
    wx.stopPullDownRefresh();
  }
};
</script>

<style lang="scss">
</style>