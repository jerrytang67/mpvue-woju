<template>
  <div class="container">
    <!-- @click="clickHandle('test click', $event)"> -->
    <view class="headBar">
      <van-row v-if="my_partner.Id">
        <van-col :span="6">
          <img
            class="userinfo-avatar"
            v-if="my_partner.headimgurl"
            :src="my_partner.headimgurl"
            background-size="cover"
          >
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
    <view class="contentBody" style="background-color:#fff">
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
    </view>
    <view style="width:100vw;background-color:#fff;">
      <view class="top-list" style="margin-top:15rpx;margin-left:2.5vw;width:95vw;">
        <topItem  :data="x"  v-for="x in topList" :key="x"></topItem>
      </view>
      <view class="card-list" style="margin-top:15rpx;margin-left:2.5vw;width:95vw;display:flex;flex-wrap:wrap;justify-content:space-between;" >
          <shopItem :data="x"  v-for="x in buyItems" :key="x"></shopItem>
      </view>
    </view>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>
<script>
//vuex
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import shopItem from "@/components/shopItem";
import topItem from "@/components/topItem";
import partner from "@/components/partner";
// import area from "@/utils/area";
import Toast from "../../../static/dist/toast/toast";
export default {
  onLoad(option) {
    if (this.my_partner && this.my_partner.Id) {
      this.$api.loadPartnerItems(this.my_partner.Id).then(res => {
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
    if (this.my_partner && this.my_partner.Id)
      this.$api.loadPartnerItems(this.my_partner.Id).then(res => {
        this.SET_BUYITEMLIST(res); //store set current buyitem list
        wx.stopPullDownRefresh();
      });
    else {
      wx.stopPullDownRefresh();
    }
  },
  components: {
    partner,
    shopItem,
    topItem
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getSetting();
  },
  mounted() {},
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
  background-color: #fff;
  min-height: 70vh;
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
