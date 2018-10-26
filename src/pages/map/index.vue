<template>
  <div class="container"  style="background:#fff;">
      <view style="width:100vw;">
        <van-search placeholder="请输入搜索关键词" @search="onSearch" />
      </view>
      <van-cell-group style="width:100vw;">
          <van-cell icon="location" v-if="l.location"
          v-for="l in location"
          :key="l" 
          is-link border="true"
          :url="'/pages/partner-list/main?lng='+l.location.lng+'&lat='+l.location.lat+'&address='+ l.city + l.district + l.name">
            <view slot="title">
              <span class="van-cell-text">{{l.city}}{{l.district}} {{l.name}}</span>
              <!-- <van-tag type="danger">标签</van-tag> -->
            </view>
          </van-cell>
      </van-cell-group>
    <!-- <map v-if="position"  
        id="map" 
        subkey="JQDBZ-M7CR6-LAYS5-MCG7D-DCXHK-GJBIV"  
        :longitude="position.longitude" 
        :latitude="position.latitude"  
        scale="18" 
        :controls="controls" 
        :markers="markers" 
        :polyline="polyline"
        @controltap="controltap" 
        @markertap="markertap"
        @tap="tapMap" 
        @regionchange="regionchange"
        show-location 
        style="width: 100vw; height: 50vh;">
    </map> -->

    <van-toast id="van-toast" />
  </div>
</template>

<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";
import Toast from "../../../static/dist/toast/toast";
export default {
  onLoad(){
    wx.setNavigationBarTitle({ title: "选择位置" });
  },
  onReady() {},
  mounted() {
    var that = this;
    // wx.getLocation({
    //   type: "gcj02",
    //   success: function(res) {
    //     // console.log(res);
    //     that.SET_POSITION(res);
    //   }
    // });
  },
  computed: {
    ...mapState(["userInfo", "position"])
  },
  methods: {
    ...mapMutations(["SET_POSITION"]),
    onSearch(event) {
      var that = this;
      that.position = [];
      console.log(event.mp.detail);
      this.$api
        .placeSuggestion({ query: event.mp.detail, region: "苏州" })
        .then(res => {
          if (res.result && res.result.length) {
            that.location = res.result;
          } else {
            Toast.fail("换个关键字试试");
          }
        })
        .catch(err => {
          Toast.fail("出错了");
        });
    },
    markertap(e) {
      console.log(e.markerId);
    },
    controltap(e) {
      console.log(e);
    },
    tapMap(e) {
      console.log(e);
    },

    regionchange(e) {
      var that = this;
      // 改变中心点位置
      if (res.type == "end") {
        that.getCenterLocation();
      }
    },
    getCenterLocation: function() {
      var that = this;
      //mapId 就是你在 map 标签中定义的 id
      var mapCtx = wx.createMapContext(mapId);
      mapCtx.getCenterLocation({
        success: function(res) {
          console.log("getCenterLocation----------------------->");
          console.log(res);
          that.updateCenterLocation(res.latitude, res.longitude);
          that.regeocodingAddress();
          that.queryMarkerInfo();
        }
      });
    }
  },
  data: {
    msg: "asfdasdf",
    location: [],
    markers: [
      // {
      //   iconPath: "/static/images/other.png",
      //   id: 0,
      //   latitude: 23.099994,
      //   longitude: 113.32452,
      //   width: 50,
      //   height: 50
      // }
    ],
    polyline: [
      // {
      //   points: [
      //     {
      //       longitude: 113.3245211,
      //       latitude: 23.10229
      //     },
      //     {
      //       longitude: 113.32452,
      //       latitude: 23.21229
      //     }
      //   ],
      //   color: "#FF0000DD",
      //   width: 2,
      //   dottedLine: true
      // }
    ],
    controls: [
      // {
      //   id: 1,
      //   iconPath: "/static/images/location.png",
      //   position: {
      //     left: (windowWidth - controlsWidth) / 2,
      //     top: (windowHeight - bottomHeight) / 2 - controlsHeight * 3 / 4,
      //     width: controlsWidth,
      //     height: controlsHeight
      //   },
      //   clickable: true
      // }
    ]
  }
};
</script>

<style scoped>
</style>
