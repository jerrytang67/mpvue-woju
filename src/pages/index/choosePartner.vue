<template>
  <div class="container">
    <view class="headBar">
      <div style="padding:0 20rpx">
        <p>您所在的当位置</p>
        <p>
          {{position.address}}
          <van-button type="default" @click="goMap" size="small">修改位置</van-button>
        </p>
      </div>
    </view>
    <view class="contentBody">
      <div class="card-list" style="padding:20rpx 30rpx">
        <van-card
          v-for="p in partner_list"
          :key="p"
          v-if="partner_list.length>0"
          :thumb="p.headimgurl"
          @click="select(p)"
          tag="团长"
        >
          <view slot="title" class="title">{{p.nickname}}</view>
          <view slot="desc" class="desc" style="font-size:34rpx;color:red;">社群:{{p.LocationLabel}}</view>
          <view slot="tags">取货地址{{p.LocationAddress}}</view>
          <view slot="footer">
            <van-tag type="primary">距您 {{ p.Distance/1000 >1?p.Distance/1000+'公里':p.Distance+'米' }}</van-tag>
          </view>
        </van-card>
        <view v-if="partner_list.length==0">您当前位置三公里内没有团长,可以手动更换位置</view>
      </div>
    </view>
    <van-dialog id="van-dialog"/>
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";

import Toast from "../../../static/dist/toast/toast";
import { setTimeout } from "timers";

export default {
  onLoad(options) {
    wx.setNavigationBarTitle({ title: "附近其他团长" });

    console.log(options);
  },
  onReady() {},
  mounted() {
    var that = this;
    var query = this.$root.$mp.query;
    that.PARTNER([]);
    if (query.lat && query.lng && query.address) {
      that.SET_POSITION({
        latitude: query.lat,
        longitude: query.lng,
        address: query.address
      });
      that.$api
        .loadPartnerList({
          Lat: query.lat,
          Lng: query.lng,
          type: "bd09"
        })
        .then(res => {
          that.PARTNER(res);
        });
    } else {
      wx.getLocation({
        type: "gcj02",
        success: function(res) {
          //save to store
          that.SET_POSITION(res);
          //get partner list
          that.$api
            .loadPartnerList({
              Lat: res.latitude,
              Lng: res.longitude,
              type: "gcj02"
            })
            .then(res => {
              if (res) that.PARTNER(res);
              else Toast.fail("附近没有团长");
            });

          //get pois name
          that.$api
            .getPois({ lat: res.latitude, lng: res.longitude, type: "gcj02" })
            .then(res2 => {
              that.position.address = res2.result.formatted_address;
              that.SET_POSITION(that.position);
            })
            .catch(error => {
              console.log(error);
            });
        },
        fail: function(error) {
          Toast("必须授权定位才可查看团长");
        }
      });
    }
  },
  computed: {
    ...mapState(["userInfo", "partner_list", "position"])
  },
  methods: {
    ...mapMutations(["PARTNER", "SET_BUYITEMLIST", "SET_POSITION"]),
    ...mapActions(["select_partner"]),
    select(p) {
      var that = this;
      this.select_partner(p).then(() => {
        // Toast.success("选择成功");
        that.$api.loadPartnerItems(p.Id).then(res => {
          that.SET_BUYITEMLIST(res);
        });
        setTimeout(() => {
          wx.switchTab({ url: "/pages/index/index" });
        }, 1000);
      });
      // wx.navigateTo({ url: "/pages/index/main" });
      // wx.navigateBack()
    },
    goMap() {
      wx.navigateTo({ url: "/pages/index/address" });
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin: 15rpx 20rpx;
}

view.van-card__desc,
view.van-card__desc {
  font-weight: bold;
  font-size: 20rpx;
}
.van-card__img {
  border-radius: 50%;
}
</style>
