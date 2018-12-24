<template>
  <div class="container" style="background:#fff;">
    <view style="width:100vw;">
      <van-search placeholder="请输入搜索关键词" @search="onSearch"/>
    </view>
    <view class="history" v-if="searchHistory && searchHistory.length >0">搜索历史:
      <van-button size="small" v-for="s in searchHistory" :key="s" @click="selectAddress(s)">{{s}}</van-button>
    </view>
    <van-cell-group style="width:100vw;">
      <van-cell
        icon="location"
        v-if="l.location"
        v-for="l in location"
        :key="l"
        is-link
        border="true"
        :url="'/pages/index/choosePartner?lng='+l.location.lng+'&lat='+l.location.lat+'&address='+ l.city + l.district + l.name"
      >
        <view slot="title">
          <span class="van-cell-text">{{l.city}}{{l.district}} {{l.name}}</span>
          <!-- <van-tag type="danger">标签</van-tag> -->
        </view>
      </van-cell>
    </van-cell-group>
    <van-dialog id="van-dialog"/>
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";
import Toast from "../../../static/dist/toast/toast";
export default {
  onLoad() {
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
    ...mapState(["userInfo", "position", "searchHistory"])
  },
  methods: {
    ...mapMutations(["SET_POSITION", "ADD_SEARCHHISTORY"]),
    selectAddress(txt) {
      this.postSearch(txt);
    },

    postSearch(txt) {
      let that = this;
      this.$api
        .placeSuggestion({ query: txt, region: "苏州" })
        .then(res => {
          if (res.result && res.result.length) {
            that.location = res.result;
            that.ADD_SEARCHHISTORY(txt);
          } else {
            Toast.fail("换个关键字试试");
          }
        })
        .catch(err => {
          Toast.fail("出错了");
        });
    },
    onSearch(event) {
      let that = this;
      let txt = event.mp.detail;
      that.position = [];
      that.postSearch(txt);
    }
  },
  data: {
    location: []
  }
};
</script>

<style lang="scss" scoped>
.history {
  font-size: 24rpx;
  padding: 10rpx 20rpx;
  ._van-button {
    margin-right: 20rpx;
  }
}
</style>
