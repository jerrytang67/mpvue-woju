<template>
  <div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "@/utils/index";
import Toast from "../../../static/dist/toast/toast";

export default {
  onLoad() {
    wx.setNavigationBarTitle({ title: "查看启动日志" });
  },
  data() {
    return {
      logs: []
    };
  },

  created() {
    const logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(log => formatTime(new Date(log)));
  }
};
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
