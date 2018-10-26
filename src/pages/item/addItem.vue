<template>
  <div class="container">
      <div class="contentBody">
          <div  style="padding:20rpx 5vw;">
            <demo-block title="滚动图片">
                <view class="pic-upload">
                    <div v-if="item.LogoList &&item.LogoList.length<4" class="upload-btn" @click="uploadImg()"  :style="{'width':width || '120rpx','height':height || '120rpx'}">
                        <span class="upload-add">+</span>
                    </div>
                    <block v-if="item.LogoList" v-for="(src,index) in item.LogoList" :key="src" >
                        <img @click="previewImage(index)" :src="src+'!w100h100'" :style="{'width':width || '120rpx','height':height || '120rpx'}" class="img" >
                    </block>
                </view>
            </demo-block>

            <demo-block title="商品详情">
                <van-cell-group>
                    <van-field  label="商品名称" :value="item.Name" required clearable @change="onChange"  data-name="Name" />
                    <van-field label="原价" :value="item.Price" type="digit"  required clearable @change="onChange" data-name="Price"/>
                    <van-field  label="成交价" :value="item.VipPrice" type="digit"  required @change="onChange" data-name="VipPrice"/>
                    <van-field  label="库存" :value="item.Count" type="number"  required 
                    @change="onChange" data-name="Count"/>
                    <van-switch-cell title="是否限购" :checked="item.LimitBuyCount>0" @change="toggleLimitBuyCount"/>
                    <van-field  label="限购数量" :disabled="item.LimitBuyCount==0" :value="item.LimitBuyCount" type="number" 
                    @change="onChange" data-name="LimitBuyCount"/>
                </van-cell-group>
            </demo-block>
          </div>
      </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat" text="客服"/>
            <!-- <van-goods-action-icon  @click="onClickIcon" icon="cart" text="购物车" :info="total>0?total:''"  /> -->
            <van-goods-action-button @click="save()" text="暂存退出" type="warning" />
            <van-goods-action-button text="发布" @click="post()"  />
        </van-goods-action>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "@/utils/index";
import Toast from "../../../static/dist/toast/toast";

import upload from "@/utils/upload";

export default {
  onLoad(options) {},
  onReady() {
    this.shopId = this.$root.$mp.query.shopId;
    this.Item = {
      Name: "",
      LogoList: wx.getStorageSync("_tmpUpLoadImages") || [],
      Price: 0,
      VipPrice: 0,
      LimitBuyCount: 0
    };
  },
  data: {
    shopId: null,
    item: null,
    width: "120rpx",
    height: "120rpx"
  },
  methods: {
    post() {
      console.log(this.item);
    },
    onChange(e) {
      let value = e.mp.detail;
      let key = e.mp.currentTarget.dataset.name;
      this.item[key] = value;
    },
    save() {
      console.log("set key:save_item_" + this.shopId);
      wx.setStorageSync("save_item_" + this.shopId, this.item);
      wx.removeStorageSync("_tmpUpLoadImages");
      wx.navigateBack();
    },
    previewImage(e) {
      console.log(e);
      var that = this;
      wx.previewImage({
        current: that.item.LogoList[e],
        urls: that.item.LogoList // 需要预览的图片http链接列表
      });
    },
    uploadImg() {
      var that = this;
      upload
        .upload()
        .then(res => {
          console.log("upfile ok");
          that.item.LogoList.push("http://img.wjhaomama.com/" + res);
          wx.setStorageSync("_tmpUpLoadImages", that.item.LogoList);
          console.log(wx.getStorageSync("_tmpUpLoadImages"));
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleLimitBuyCount() {
      this.item.LimitBuyCount = this.item.LimitBuyCount > 0 ? 0 : 1;
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
