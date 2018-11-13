<template>
  <div class="container">
    <div style="background:#fff;width:100vw;">
      <van-tabs active="0" @change="onTabChange">
        <van-tab title="我的商品">
          <van-card v-for="(x,index) in myBuyItems" :index="index" lazy-load="true" :key="x" :desc="x.BuyItem.ShareDesc" :title="x.BuyItem.Name" :origin-price="x.BuyItem.Price" :price="x.BuyItem.VipPrice">
            <view slot="thumb">
              <image style="width:90px;height:90px;" mode="aspectFill" :src="x.BuyItem.LogoList[0]+'!w100h100'" lazy-load="true" @click.stop="$navigate.To('/pages/item/itemDetail?id='+x.BuyItem.Id)" />
            </view>
            <view slot="footer">
              <van-button size="small" type="danger" @click.stop="deleteItem(index)">删除</van-button>
            </view>
            <view slot="tags">
              <van-switch size="45rpx" :checked="x.State" @change="onChange(x)" />
            </view>
          </van-card>
        </van-tab>
        <!-- tab1end -->

        <van-tab title="店铺">
          <div style="display:flex;flex-direction:row;justify-content:start;">
            <scroll-view scroll-y style="height: calc(100vh - 44px); width:25vw;">
              <van-badge-group :active="selectShopIndex" @change="onBadgeChange">
                <van-badge title="莴聚公告"></van-badge>
                <van-badge v-for="x in partnerShops" :key="x" :title="x.ShopName" />
              </van-badge-group>
            </scroll-view>
            <view style="width:75vw;">
              <div>
                <div v-if="selectShopIndex<=0">
                  这里放总的介绍页内容
                </div>
                <div style="padding:25rpx;font-size:32rpx" v-if="selectShopIndex>0">
                  <image style="width:50px;height:50px;border-radius:50%;" :src="currentShop.LogoImageUrl+'!w100h100'" />
                  <p>{{currentShop.ShopName}}</p>
                  <p>地址:{{currentShop.ShopAddress}}</p>
                  <p>电话:{{currentShop.ShopKeFuTel}}</p>
                </div>
                <van-card v-for="x in items" @click.stop="$navigate.To('/pages/item/itemDetail?id='+x.Id)" lazy-load="true" :key="x" :desc="x.ShareDesc" :title="x.Name" :thumb="x.LogoList[0]+'!w100h100'" :origin-price="x.Price" :price="x.VipPrice">
                  <view slot="footer">
                    <van-button size="small" type="danger" @click.stop="addItem(x.Id)">上架</van-button>
                  </view>
                  <view slot="tags">
                  </view>
                </van-card>
              </div>
            </view>
          </div>
        </van-tab>
        <!-- tab2end -->
        <van-tab title="备用">
          内容 4
        </van-tab>
        <!-- tab3end -->
        <van-tab title="备用标签">内容 4</van-tab>
        <!-- tab4end -->
      </van-tabs>
    </div>
    <van-dialog id="van-dialog" />
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
    ...mapState(["openid", "myBuyItems", "partnerShops", "position"])
  },
  data: {
    selectShopIndex: 0,
    currentShop: null,
    items: [],
    positionHasGot: false
  },
  onReady() {},

  methods: {
    ...mapMutations(["SET_POSITION"]),
    ...mapActions(["getPartnerSetting", "deleteMyItem"]),
    onTabChange(e) {
      console.log(e);
      let index = e.mp.detail.index;
      if (index === 0) {
        this.get();
      }
    },
    onChange(x) {
      console.log(x.State);
      this.addItem(x.BuyItem.Id, x.State ? "disable" : "add");
      // console.log(x);
      x.State = !x.State;
    },
    addItem(itemId, t) {
      if (!t) t = "add";
      console.log("SetPartnerBuyItems");
      console.log({ itemId });
      this.$api.setItems(itemId, t).then();
    },
    deleteItem(index) {
      let that = this;
      let itemId = that.myBuyItems[index].BuyItem.Id;
      if (!itemId) return;
      that.$api.setItems(itemId, "delete").then(res => {
        that.deleteMyItem(itemId);
      });
    },
    //商家便签切换
    onBadgeChange(e) {
      console.log(e);
      if (e.mp.detail < 0) return;
      //this.selectShopIndex = e.mp.detail;
      const index = e.mp.detail - 1;
      if (index >= 0) {
        this.currentShop = this.partnerShops[index];
        let shopId = this.currentShop.Id;
        console.log(this.currentShop);
        this.$api.getShopBuyItems({ shopId, state: 1 }).then(res => {
          this.items[shopId] = res;
          this.items = this.items[shopId];
        });
      }
    },
    get() {
      var that = this;
      if (!that.positionHasGot)
        wx.getLocation({
          type: "gcj02",
          success: function(res) {
            //save to store
            that.SET_POSITION(res);
            that.getPartnerSetting({ lat: res.latitude, lng: res.longitude });
            that.positionHasGot = true;
          },
          fail: function(error) {
            Toast("必须授权定位才可查看团长");
          }
        });
      else
        that.getPartnerSetting({
          lat: that.position.latitude,
          lng: that.position.longitude
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
van-badge {
  .van-badge {
    width: 25vw;
  }
}
</style>