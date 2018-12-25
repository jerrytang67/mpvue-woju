<template>
  <div class="container">
    <div class="contentBody">
      <div style="padding:24rpx 32rpx;">
        <van-steps :steps="steps" :active="step" />
        <demo-block title="实名认证基本信息">
          <van-cell-group>
            <van-field label="微信号" :value="item.weixin"  @change="onChange" data-name="weixin"  />
            <van-field label="社区名" :value="item.LocationLabel" required @change="onChange" data-name="LocationLabel" use-button-slot>
              <van-button slot="button" size="small" type="primary" @click="search">搜索</van-button>
            </van-field>
            <van-field label="地址" :value="item.LocationAddress" required @change="onChange" data-name="LocationAddress" />
          </van-cell-group>
        </demo-block>
        <demo-block title="地图">
          <map v-if="position" id="map" subkey="JQDBZ-M7CR6-LAYS5-MCG7D-DCXHK-GJBIV" :longitude="position.longitude" :latitude="position.latitude" scale="16" :markers="markers" @regionchange="regionchange" @end="regionchange" show-location style="height: 40vh;width:100%;">
          </map>
        </demo-block>
      </div>
    </div>
    <van-goods-action style="z-index:9999;">
      <van-goods-action-icon icon="chat" text="客服" open-type="contact" />
      <van-goods-action-button text="提交" v-if="!isFinish" type="primary" @click="onSubmit" />
      <van-goods-action-button text="返回首页" v-if="isFinish" type="primary" @click="back" />
    </van-goods-action>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>
<script>
const Partner = {
  weixin:"",
  LocationLabel: "",
  LocationAddress: "",
  Lat: 0,
  Lng: 0
};
import { mapState, mapMutations, mapActions } from "vuex";
import Toast from "../../../static/dist/toast/toast";
import Tip from "@/utils/Tips";
import { setTimeout } from "timers";

export default {
  // components: {
  //   picUpload
  // },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: "团长信息"
    });
  },
  onReady() {


  },
  mounted() {
    var that = this;

    wx.getLocation({
      type: "gcj02",
      success: function(res) {
        that.SET_POSITION(res);
        that.setCenter(res);
        that.mapCtx = wx.createMapContext("map");
        that.get_setting().then(()=>{
          if( that.partner)
          {
            that.item = that.partner;
            that.setCenter({ latitude: that.partner.Lat, longitude: that.partner.Lng });
          }
        });
      },
      fail: function() {
        Tip.error("你拒绝了定位授权,请打开授权定位后再试...");
        setTimeout(function() {
          wx.navigateBack();
        }, 2000);
      }
    });
  },
  data: {
    step: 1,
    isFinish: false,
    item: Object.assign({}, Partner),
    mapCtx: undefined,
    location: [],
    markers: [
      {
        iconPath: "/static/images/location.png",
        id: 0,
        latitude: 0,
        longitude: 0,
        width: 32,
        height: 32
      }
    ],
    polyline: [],
    controls: [],
    steps: [
      {
        text: "步骤一",
        desc: "实名信息"
      },
      {
        text: "步骤二",
        desc: "团长信息"
      },
      {
        text: "完成",
        desc: "等待审核通过"
      }
    ]
  },
  onReady() {},
  computed: {
    ...mapState(["position","partner"])
  },
  methods: {
    ...mapMutations(["SET_POSITION"]),
    ...mapActions(["get_setting"]),
    //提交资料
    onSubmit(e) {
      let that = this;
      console.log(e);
      this.$api.postPartner(this.item).then(res => {
        if (res.Id) {
          Toast.success("提交成功,请审核结果");
          that.isFinish = true;
          that.step = 2;
        }
      });
    },
    back() {
      wx.switchTab({ url: "/pages/index/index" });
    },
    search() {
      this.$api.geocoder(this.item.LocationLabel).then(res => {
        this.setCenter({ latitude: res.Lat, longitude: res.Lng });
      });
    },
    onChange(e) {
      // console.log(e);
      let value = e.mp.detail.value || e.mp.detail;
      let key = e.mp.currentTarget.dataset.name;
      this.item[key] = value;
    },
    regionchange(e) {
      let that = this;
      if (e.type === "end" && e.mp.causedBy === "drag") {
        // console.log(e);
        that.getCenterLocation();
      }
    },
    //地图和MARKER移至中心点
    setCenter({ latitude, longitude }) {
      this.markers[0].latitude = latitude;
      this.markers[0].longitude = longitude;
      this.position.latitude = latitude;
      this.position.longitude = longitude;
      this.item.Lng = longitude;
      this.item.Lat = latitude;
    },

    getCenterLocation: function() {
      let that = this;
      that.mapCtx.getCenterLocation({
        success: function(res) {
          // console.log(res);
          that.setCenter(res);
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
</style>
