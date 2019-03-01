<template>
  <div class="container">
    <!-- @click="clickHandle('test click', $event)"> -->
    <view class="headBar">
      <van-row v-if="my_partner.Id">
        <van-col :span="6">
          <img class="userinfo-avatar" v-if="my_partner.headimgurl" :src="my_partner.headimgurl" background-size="cover">
        </van-col>
        <van-col :span="14">
          <p style="font-size:.7rem;">
            <text>团长:{{my_partner.nickname}}</text>
          </p>
          <p style="font-weight:500;">
            <text>{{my_partner.LocationLabel}}</text>
          </p>
          <p style="font-size:.7rem;">
            <text>{{my_partner.LocationAddress}}</text>
          </p>
        </van-col>
        <van-col :span="4">
          <view style="padding-top:20rpx;">
            <van-button
              square
              type="primary"
              open-type="getUserInfo"
              @getuserinfo="bindGetUserInfo"
              @click="getUserInfo1"
              style="border: none;background:none;margin-top: 20rpx"
            >
              <van-icon name="arrow" />
            </van-button>
          </view>
        </van-col>
      </van-row>
      <view
        class="center"
        v-if="!my_partner.Id"
      >
        <van-button
          style="margin:0 auto;"
          type="danger"
          open-type="getUserInfo"
          @getuserinfo="bindGetUserInfo"
          @click="getUserInfo1"
        >请先选择团长</van-button>
      </view>
    </view>
    <view class="contentBody">
      <view class="flex-between">
        <image
          src="/static/images/top1.png"
          mode="aspectFit"
          @click.stop="$navigate.To('/pages/index/realNameSys?type=0')"
          style="height:25vw;border-radius:15px 0 0 0;"
        />
        <image
          src="/static/images/top2.png"
          mode="aspectFit"
          @click.stop="$navigate.To('/pages/index/realNameSys?type=1')"
          style="height:25vw;border-radius:0 15px 0 0;"
        />
      </view>
      <van-notice-bar
        :scrollable="true"
        :text="my_partner.NoticeContent"
        v-if="my_partner.NoticeContent"
      />
      <swiper
        :indicator-dots="false"
        style="margin:10rpx;"
        autoplay="false"
        display-multiple-items="2"
        next-margin="150rpx"
        circular="true"
        v-if="topList.length>2"
      >
        <swiper-item
          v-for="x in topList"
          :key="x"
          @click="goItem(x)"
        >
          <image
            mode="aspectFill"
            :src="x.BuyItem.LogoList[0]+'!w100h100'"
            class="slide-image"
            style="width:250rpx;height:160rpx;border-radius:10px;"
          />
          <view
            style="font-size:28rpx;"
            class="show2line"
          >{{x.BuyItem.Name}}</view>
          <view style="color:#F83101;">￥{{x.BuyItem.VipPrice}}</view>
        </swiper-item>
      </swiper>
    </view>
    <div class="card-list">
      <van-card
        v-for="x in buyItems"
        :key="x"
        :thumb="x.BuyItem.LogoList[0]+'!w100h100'"
        @click.stop="goItem(x)"
      >
        <view
          slot="title"
          class="title"
        >{{x.BuyItem.Name}}</view>
        <view
          slot="desc"
          class="desc"
          v-if="x.BuyItem.ShareDesc"
        >{{x.BuyItem.ShareDesc}}</view>
        <view
          slot="tags"
          class="price"
        >
          <!-- <van-tag type="danger">自营</van-tag> -->
          <view>
            <text class="vip">￥{{x.BuyItem.VipPrice}}</text>
            <text class="old">￥{{x.BuyItem.Price}}</text>
          </view>

          <van-tag
            type="danger"
            style="float:right;"
          >{{x.BuyItem.PickUpType}}</van-tag>
        </view>
        <view slot="footer">
          <van-tag
            type="primary"
            v-if="x.BuyItem.LimitBuyCount"
          >限购 {{x.BuyItem.LimitBuyCount}}件</van-tag>
          <!-- <van-stepper
            :value="x.Count"
            min="0"
            @click.stop=""
            @plus.stop="add(x)"
            @minus.stop="remove(x)"
          /> -->
        </view>
      </van-card>
    </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>
<script>
//vuex
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import partner from "@/components/partner";
// import area from "@/utils/area";
import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad(option) {
    if (wx.getStorageSync("my_partner") && wx.getStorageSync("my_partner").Id) {
      this.$api
        .loadPartnerItems(wx.getStorageSync("my_partner").Id)
        .then(res => {
          this.SET_BUYITEMLIST(res);
        });
    }
  },
  onReady() {
    var that = this;
    var query = that.$root.$mp.query;
    if (query.pid) {
      that.$api.getPartner({ pid: query.pid }).then(res => {
        that.SET_SELECT_PARTNER(res); //store set the current partner
      });
      that.$api.loadPartnerItems(that.$root.$mp.query.pid).then(res => {
        if (res) that.SET_BUYITEMLIST(res); //store set current buyitem list
      });
    }
  },
  onPullDownRefresh: function() {
    if (wx.getStorageSync("my_partner") && wx.getStorageSync("my_partner").Id)
      this.$api
        .loadPartnerItems(wx.getStorageSync("my_partner").Id)
        .then(res => {
          this.SET_BUYITEMLIST(res); //store set current buyitem list
          wx.stopPullDownRefresh();
        });
    else {
      wx.stopPullDownRefresh();
    }
  },
  components: {
    partner
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getSetting();
  },
  mounted() {
    // 一进来看看用户是否授权过
    //this.getSetting();
  },
  onShareAppMessage: res => {
    let select_partner = wx.getStorageSync("my_partner");
    console.log(select_partner);
    if (select_partner)
      return {
        title: select_partner.nickname + " 的小铺",
        path: "/pages/index/index?pid=" + select_partner.Id
      };
    else
      return {
        title: "莴聚",
        path: "/pages/index/main"
      };
  },
  data() {
    return {
      // areaList: area
    };
  },
  computed: {
    ...mapState([
      "my_partner",
      "userInfo",
      "partner_list",
      "buyItems",
      "openid"
    ]),
    ...mapGetters(["topList", "notopList"])
  },

  methods: {
    ...mapMutations([
      "TEST",
      "PARTNER",
      "SET_OPENID",
      "SET_BUYITEMLIST",
      "SET_SELECT_PARTNER"
    ]),
    ...mapActions(["add_to_cart", "setUserInfo"]),
    add(item) {
      item.Count += 1;
      this.add_to_cart(item);
    },
    remove(item) {
      item.Count -= 1;
      this.add_to_cart(item);
    },
    goItem(x) {
      if (x) {
        wx.navigateTo({ url: "/pages/item/itemDetail?id=" + x.BuyItem.Id });
      }
    },
    getSetting() {
      wx.getSetting({
        success: function(res) {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: function(res) {
                //用户已经授权过
                //Toast.success("用户已经授权");
                console.log("用户已经授权");
              }
            });
          } else {
            //Toast.success("用户未授权");
            console.log("用户未授权");
          }
        }
      });
    },
    getUserInfo1() {
      console.log("click事件首先触发");
      // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
      // console.log(wx.canIUse('button.open-type.getUserInfo'))
      if (wx.canIUse("button.open-type.getUserInfo")) {
        // 用户版本可用
      } else {
        Toast.fail("请升级微信版本");
      }
    },
    bindGetUserInfo(e) {
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        this.getUserInfo()
          .then(res => {
            wx.navigateTo({ url: "/pages/index/choosePartner" });
          })
          .catch(error => {
            Toast.fail(error);
          });
      } else {
        //用户按了拒绝按钮
        Toast.fail("请先授权");
      }
    },

    async onSuccess() {
      Toast.success("已加入购物车");
    },
    onClickButton() {
      Toast.fail("预购成功");
    },
    onSubmit() {},
    getUserInfo() {
      var that = this;
      return new Promise((resolve, reject) => {
        wx.login({
          success: logRes => {
            wx.getUserInfo({
              success: res => {
                res.code = logRes.code;
                this.setUserInfo(res);
                return resolve();
              }
            });
          },
          fail: error => {
            return reject(error);
          }
        });
      });
      // 调用登录接口
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  }
};
</script>
<style lang="scss" scoped>
.card-list {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // justify-items: center;
  // margin: 15rpx 20rpx;
}
.card-list .price {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15rpx;
  display: flex;
  justify-content: space-between;
}
.card-list .price .vip {
  color: #f00;
  font-size: 40rpx;
}
.card-list .price .old {
  color: gray;
  font-size: 25rpx;
  padding-left: 10rpx;
  text-decoration: line-through;
}

van-button.otherP {
  border: none;
  background: none;
  margin-top: 20rpx;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userinfo-avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  margin: 20rpx 0 0 30rpx;
  border: 1rpx solid #fff;
}
</style>
