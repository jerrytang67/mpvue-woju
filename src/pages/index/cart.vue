<template>
  <div class="container">
    <div class="contentBody">
      <van-cell-group>
        <van-cell :title="my_partner.nickname">
          <img
            slot="right-icon"
            :src="my_partner.headimgurl"
            style="border-radius:50%;width:80rpx;height:80rpx;"
          >
        </van-cell>
        <van-cell :title="'取货地址:'+my_partner.LocationAddress" icon="location" is-link>
          <van-icon slot="right-icon" name="search" class="van-cell__right-icon"/>
        </van-cell>
      </van-cell-group>
      <van-card
        v-for="x in cartItems"
        lazy-load="true"
        :key="x"
        :tag="x.BuyItem.Type"
        :desc="x.BuyItem.ShareDesc"
        :title="x.BuyItem.Name"
        :thumb="x.BuyItem.LogoList[0]+'!w100h100'"
        :num="x.Count"
        :origin-price="x.BuyItem.Price"
        :price="x.BuyItem.VipPrice"
      >
        <view slot="footer">
          <van-stepper :value="x.Count" min="0" @plus="add(x)" @minus="remove(x)"/>
        </view>
        <view slot="tags"></view>
      </van-card>
      <van-submit-bar
        :disabled="totalVipPrice<=0"
        :price="totalVipPrice*100"
        button-text="提交订单"
        bind:submit="onSubmit"
      >
        <van-tag type="danger" v-if="youhuan>0">省 {{youhuan}}元</van-tag>
      </van-submit-bar>
    </div>
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
    wx.setNavigationBarTitle({ title: "购物车" });
  },
  onReady() {},
  mounted() {},
  computed: {
    ...mapState([
      "userInfo",
      "total",
      "totalPrice",
      "totalVipPrice",
      "cartItems",
      "my_partner"
    ]),
    youhuan() {
      return this.totalPrice - this.totalVipPrice;
    }
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(["add_to_cart"]),
    add(item) {
      item.Count += 1;
      this.add_to_cart(item);
    },
    remove(item) {
      item.Count -= 1;
      this.add_to_cart(item);
    }
  }
};
</script>

<style scoped>
</style>
