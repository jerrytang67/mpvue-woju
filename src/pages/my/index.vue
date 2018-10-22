<template>
  <div class="container">
      <image :src="userInfo.userInfo.avatarUrl" style="width:30vw;height:30vw;border-radius:50%;margin-bottom:5rpx;" />
    <view class="contentBody">
      <div  style="padding:20rpx 25rpx;">
      <van-panel :title="userInfo.userInfo.nickName" :desc="position.address">
        <view>
          <van-row>
            <van-col :span="6">
              <van-icon name="clock" color="#09BB07" size="40px" />
            </van-col>
            <van-col :span="6">
              <van-icon name="gold-coin"  color="#09BB07" size="40px"/>
            </van-col>
            <van-col :span="6">
              <van-icon name="upgrade"  color="#09BB07" size="40px"/>
            </van-col>
            <van-col :span="6">
              <van-icon name="success"  color="#09BB07" size="40px"/>

            </van-col>
          </van-row>
        </view>
      </van-panel>
      123
      <van-cell-group>
        <van-cell icon="location" is-link arrow-direction="down" value="打开地图" url="/pages/map/main"></van-cell>

      </van-cell-group>
      </div>
    </view>
      <van-toast id="van-toast" />
  </div>
  
</template>

<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";
import Toast from "../../../static/dist/toast/toast";
export default {
  onReady() {},
  mounted() {},
  computed: {
    ...mapState(["userInfo", "position"])
  },
  methods: {
    ...mapMutations([])
  }
};
</script>

<style scoped>
</style>
