<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    console.log("app created and cache logs by setStorageSync");
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: #09bb07;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
view.center {
  display: flex;
  justify-content: center;
}

.h_center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.headBar {
  height: 150rpx;
  width: 100%;
  color: #fff;
}
.headBar p {
  padding-bottom: 10rpx;
}

.contentBody {
  background: #fafafa;
  border-radius: 15px 15px 0 0;
  width: 100%;
}
.pull-left {
  float: left;
}
.pull-right {
  float: right;
}
</style>
