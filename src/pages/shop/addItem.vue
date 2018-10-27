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
                    <van-switch-cell title="是否限购" :checked="item.LimitBuyCount>0" @change="toggle('LimitBuyCount')" />
                    <van-field  label="限购数量" :disabled="item.LimitBuyCount==0" :value="item.LimitBuyCount" type="number" 
                    @change="onChange" data-name="LimitBuyCount"/>
                </van-cell-group>
            </demo-block>

            <demo-block title="购前需知">
              <van-cell-group>
                <van-field :value="item.NoticeText" label="购前需知"    type="textarea" required autosize @change="onChange"  data-name="NoticeText" 
  />
              </van-cell-group>
            </demo-block>

            <demo-block title="商品介绍">
              <van-cell-group>
                <van-field :value="item.Desc" label="商品介绍"    type="textarea"  required autosize @change="onChange"  data-name="Desc" 
  />
              </van-cell-group>
            </demo-block>

            <demo-block title="展示平台">
                <van-checkbox-group :value="result" @change="onChkChange" data-id="group">
                   <van-cell-group >
                    <van-cell
                      v-for="xx in showType"
                      :key="xx"
                      :title="xx.name"
                      clickable
                      :data-name="xx.value"
                      @click.stop="onChkToggle"
                    >
                    <van-checkbox :class="'checkboxes-'+xx.value" :name="xx.value" @click.stop="onChkTap" />
                </van-cell>
                </van-cell-group >
                </van-checkbox-group>
            </demo-block>

            <demo-block title="状态">
              <van-switch-cell title="是否启用" :checked="item.State>0" @change="toggle('State')" />
            </demo-block>
          </div>
          <div style="height:15vh;"> </div>
      </div>
    <van-goods-action style="z-index:9999;">
        <van-goods-action-icon icon="chat" text="客服"/>
        <!-- <van-goods-action-icon  @click="onClickIcon" icon="cart" text="购物车" :info="total>0?total:''"  /> -->
        <!-- <van-goods-action-button @click="save()" text="暂存退出" type="warning" /> -->
        <van-goods-action-button text="发布" @click="post()"  />
    </van-goods-action>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "@/utils/index";

import Toast from "../../../static/dist/toast/toast";
import Dialog from "../../../static/dist/dialog/dialog";

import upload from "@/utils/upload";
export default {
  onLoad(options) {},
  onReady() {
    this.shopId = this.$root.$mp.query.shopId;
    this.item.ShopId = this.shopId;
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  data: {
    result: ["2"],
    showType: [
      { name: "莴聚小程序", value: 2 },
      { name: "吴江优选", value: 1 }
    ],
    shopId: null,
    item: {
      Name: "",
      LogoList: [],
      Price: null,
      VipPrice: null,
      Count: null,
      LimitBuyCount: 0,
      State: 1,
      ShopId: null
    },
    width: "120rpx",
    height: "120rpx"
  },
  methods: {
    post() {
      console.log(this.item);
      this.$api.post_buyitem(this.item).then(res => {
        Dialog.alert({
          title: "success",
          message: JSON.stringify(res)
        }).then(() => {
          // on close
        });
      });
    },
    onChkTap(e) {
      console.log("onChkTap");
      console.log(e);
    },
    onChkToggle(event) {
      console.log("onCellToggle");
      console.log(event);
      let { name } = event.currentTarget.dataset;
      let checkbox = this.$mp.page.selectComponent(`.checkboxes-${name}`);
      checkbox.toggle();
    },
    onChkChange(e) {
      console.log("onChkChange");
      console.log(e);
      this.result = e.mp.detail;
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
    toggle(key) {
      switch (key) {
        case "LimitBuyCount": {
          this.item[key] = this.item[key] > 0 ? 0 : 1;
          break;
        }
        default: {
          this.item[key] = !this.item[key];
        }
      }
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
