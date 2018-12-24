<template>
  <div>
    <view style="margin-top:40vh;">
      <button
        type="primary"
        open-type="getUserInfo"
        @getuserinfo="bindGetUserInfo"
        @click="getUserInfo1"
      >授权登录</button>
    </view>
    <van-dialog id="van-dialog"/>
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Toast from "../../../static/dist/toast/toast";
export default {
  onLoad() {},
  data: {},
  methods: {
    ...mapMutations(["SET_OPENID"]),
    ...mapActions(["setUserInfo"]),
    bindGetUserInfo(e) {
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        this.getUserInfo()
          .then(res => {
            wx.switchTab({ url: "/pages/index/index" });
          })
          .catch(error => {
            Toast.fail(error);
          });
      } else {
        //用户按了拒绝按钮
        Toast.fail("请先授权");
      }
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
    getUserInfo() {
      var that = this;
      return new Promise((resolve, reject) => {
        wx.login({
          // withCredentials: true,
          success: logRes => {
            // that.$api.code2session(logRes.code).then(res => {
            //   console.log(res);
            // if (res) {
            //   this.SET_OPENID(res);
            // }
            // if (res.token) {
            // console.log("token ok");
            // wx.setStorageSync("token", res.token);
            wx.getUserInfo({
              success: res => {
                res.code = logRes.code;
                this.setUserInfo(res);
                return resolve();
              }
            });
            // }
            // });
          },
          fail: error => {
            return reject(error);
          }
        });
      });
      // 调用登录接口
    }
  }
};
</script>

<style>
</style>
