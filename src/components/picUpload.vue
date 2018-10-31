<template>
  <view class="pic-upload">
<block v-if="limit===1">
    <div  class="upload-btn" @click="uploadImg()"  :style="{'width':width || '120rpx','height':height || '120rpx'}">
        <span class="upload-add">+</span>
    </div>
    <block>
        <img @click="previewImage(0)" :src="data+'!w100h100'" :style="{'width':width || '120rpx','height':height || '120rpx'}" class="img" >
    </block>
</block>
<block v-if="limit>1">
    <div v-if="data && data.length<limit" class="upload-btn" @click="uploadImg()"  :style="{'width':width || '120rpx','height':height || '120rpx'}">
        <span class="upload-add">+</span>
    </div>
    <block v-for="(src,index) in data" :key="src" >
        <img @click="previewImage(index)" :src="src+'!w100h100'" :style="{'width':width || '120rpx','height':height || '120rpx'}" class="img" >
    </block>
</block>
  </view>
</template>

<script>
import upload from "@/utils/upload";

export default {
  props: ["data", "limit"],
  data: {
    width: "120rpx",
    height: "120rpx"
  },
  methods: {
    previewImage(e) {
      var that = this;
      if (that.limit > 1)
        wx.previewImage({
          current: that.data[e],
          urls: that.data // 需要预览的图片http链接列表
        });
      else
        wx.previewImage({
          current: that.data,
          urls: that.data // 需要预览的图片http链接列表
        });
    },
    uploadImg() {
      var that = this;
      upload
        .upload()
        .then(res => {
          console.log("upfile ok");
          if (that.limit == 1) that.data = res;
          else that.data.push("http://img.wjhaomama.com/" + res);
          // wx.setStorageSync("_tmpUpLoadImages", that.data);
          // console.log(wx.getStorageSync("_tmpUpLoadImages"));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.pic-upload {
  padding: 10rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  .upload-btn {
    border: 1px dashed #ddd;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20rpx;
  }
  .upload-add {
    font-size: 80rpx;
    font-weight: 500;
    color: #c9c9c9;
  }
}

.img {
  margin: 10rpx 30rpx 10rpx 0;
}
</style>
