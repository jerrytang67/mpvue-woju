<template>
  <div class="container">
    <image :src="userInfo.userInfo.avatarUrl" style="width:30vw;height:30vw;border-radius:50%;margin-bottom:5rpx;" />
    <view class="contentBody">
      <div style="padding:20rpx 5vw;">
        <demo-block title="我的信息">
          <van-panel>
            <view slot="header" style="padding:1rem 2rem;">
                <view>{{userInfo.userInfo.nickName}}</view>
                <view style="font-size:.7rem;">{{position.address}}</view>
            </view>
            <view>
              <van-tabbar :active="active" @change="tabbar_change" :fixed="false">
                <van-tabbar-item icon="gold-coin" :info="waitForPayCount?waitForPayCount:''">待付款</van-tabbar-item>
                <van-tabbar-item icon="chat" :info="paidOrderCount? paidOrderCount:''">已付款</van-tabbar-item>
                <van-tabbar-item icon="records" :info="canTakeOrderCount?canTakeOrderCount:''">可取货</van-tabbar-item>
                <van-tabbar-item icon="shop">已完成</van-tabbar-item>
              </van-tabbar>
            </view>
          </van-panel>
        </demo-block>
          <!-- <van-cell-group>
            <van-cell icon="location" is-link arrow-direction="down" value="打开地图" url="/pages/map/main"></van-cell>
          </van-cell-group> -->
        <!-- <demo-block title="展示图标">
          <van-panel title="标题" use-footer-slot>
            <view slot="footer">
              <van-button size="small" @click="upFile">上传图片测试</van-button>
              <image :src="'http://img.wjhaomama.com/'+imgSrc" mode="aspectFill"  v-if="imgSrc" />
            </view>
          </van-panel>
        </demo-block> -->
        <demo-block title="其它设置">
          <van-switch-cell
            title="接收通知"
            :checked="noticeChk"
            @change="toggleSetting('notice')"
          />
        </demo-block>

        <demo-block title="我是团长" v-if="partner" >
          <van-panel  use-footer-slot class="partner">
            <view slot="header" class="header">
              <div>姓名:{{partner.Realname}}</div>
              <div>电话:{{partner.Phone}}</div>
              <div>可提: {{partner.AvblBalance}} 不可提 {{partner.UnavblBalance}} 已提:{{partner.TotalWithdrawals}}</div>
            </view>
            <view style="padding:0 20rpx;" slot="footer">
              <van-tabbar :active="active" @change="tabbar_change" :fixed="false">
                <van-tabbar-item icon="location" @click="$navigate.To('/pages/partner/map')">打开地图</van-tabbar-item>
                <van-tabbar-item icon="info-o">编辑信息</van-tabbar-item>
                <van-tabbar-item icon="points-mall"  @click="$navigate.To('/pages/partner/myBuyItems')">上架商品</van-tabbar-item>
                <van-tabbar-item icon="cart">我的订单</van-tabbar-item>
              </van-tabbar>
            </view>
          </van-panel>
        </demo-block>
        <demo-block title="我的店铺管理">
          <van-panel  v-for="shop in myShops" :key="shop" use-footer-slot >
            <view slot="header" style="display:flex; align-items:center;padding:20rpx; flex-direction:row;" >
              <image :src="shop.LogoImageUrl+'!w100h100'" style="width:80rpx;height:80rpx;border-radius:8rpx;" />
              <span style="margin-left:1rem;">
                {{shop.ShopName}}
              </span>
            </view>
            <view slot="footer">
              <van-tabbar :active="active" @change="tabbar_change" :fixed="false">
                <van-tabbar-item icon="gold-coin" @click="$navigate.To('/pages/shop/buyItems?shopId='+shop.Id)">商品列表</van-tabbar-item>
                <van-tabbar-item icon="chat" @click="$navigate.To('/pages/shop/orders?shopId='+shop.Id)">查看订单</van-tabbar-item>
                <van-tabbar-item icon="shop">团长申请</van-tabbar-item>
                <van-tabbar-item icon="shop">评价管理</van-tabbar-item>
                <van-tabbar-item icon="shop"  @click="$navigate.To('/pages/shop/addItem?shopId='+shop.Id)">新建商品</van-tabbar-item>
              </van-tabbar>
            </view>
          </van-panel>
        </demo-block>
      </div>
    </view>
      <van-toast id="van-toast" />
  </div>
</template>
<script>
// Use Vuex
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Toast from "../../../static/dist/toast/toast";

import upload from "@/utils/upload";

export default {
  onLoad() {
    wx.setNavigationBarTitle({ title: "我的" });
  },
  data: {
    imgSrc: "",
    noticeChk: true,
    active: 0
  },
  onReady() {},
  mounted() {
    this.get_setting();
  },
  //下拉
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh");
    this.get_setting().then(() => {
      setTimeout(() => {
        wx.stopPullDownRefresh();
      }, 500);
    });
  },
  computed: {
    ...mapState(["userInfo", "position", "myShops", "myOrders", "partner"]),
    ...mapGetters(["waitForPayCount", "paidOrderCount", "canTakeOrderCount"])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(["get_setting"]),
    onChange(event) {
      console.log(event.detail);
    },
    tabbar_change() {},
    goAddItem(shopId) {
      wx.navigateTo({ url: `/pages/shop/addItem?shopId=${shopId}` });
    },
    upFile() {
      var that = this;
      upload
        .upload()
        .then(res => {
          console.log(res);
          that.imgSrc = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleSetting(name) {
      this.noticeChk = !this.noticeChk;
    }
  }
};
</script>

<style lang="scss" scoped>
.van-tabbar-item--active {
  color: #09bb07 !important;
}
.partner {
  .header {
    font-size: 32rpx;
    padding: 32rpx 16rpx;
  }
}
</style>
