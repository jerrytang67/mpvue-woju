<template>
  <div class="container" style="background:#fff;">
    <swiper indicator-dots="true" autoplay="true" interval="5000" duration="500" class="swiper">
      <block v-for="(x,$index) in currentItem.LogoList" :key="x">
        <swiper-item>
          <image :src="x+'!w500'" class="slide-image" mode="aspectFill" @click="previewImage($index)" />
        </swiper-item>
      </block>
    </swiper>

    <!-- end swiper -->

    <view class="details-msg">
      <view class="details-title">{{currentItem.Name}}</view>
      <view class="details_pinfo">
        <text class="price">￥{{currentItem.VipPrice}}</text>
        <!-- <view class="order_time {{purchasetype==2||special==1?'hidden':''}}">
          <timer :startTime.sync="startTime" :endTime.sync="endTime"></timer>
        </view> -->
      </view>
      <view class="baoyou">
        <van-tag round type="primary">{{currentItem.PickUpType}}</van-tag>
        <van-tag round type="primary" v-if="currentItem.LimitBuyCount==0">不限购</van-tag>
        <van-tag round type="primary" v-else>每人限购{{currentItem.LimitBuyCount}}件</van-tag>
      </view>
    </view>
    <view class="order_num">
      <view class="doc">库存:
        <text class="num">{{currentItem.Count}}件</text>
      </view>
      <view class="doc">订单中:
        <text class="num">已拼{{currentItem.SoldCount}}件</text>
      </view>
    </view>
    <!-- endblock -->

    <view class="block">
      <view class="block_title">购前需知</view>
      <view class="block_content">
        <view class="doc">
          {{currentItem.NoticeText}}
        </view>
      </view>
    </view>
    <!-- endblock -->
    <view class="block">
      <view class="block_title">跟团说明</view>
      <view class="block_content">
        <view class="doc">
          此商品在拼团期间可接收订单，如若超过拼团时间则不能下单；未付款订单系统一小时内将自动取消，所以，亲下单以后请尽快付款。
          我们会以实际订单为准为您发货。请您放心购买!
          <!-- ，如超过订单时间而又没有拼购到规定数量的，我们将会第一时间为您退款，请您放心购买! -->
        </view>
      </view>
    </view>
    <!-- endblock -->
    <!-- <view class="spacing"></view>
    <view class="block">
      <view class="block_title">商品信息</view>
      <view class="block_content">
      </view>
    </view> -->
    <!-- endblock -->

    <view class="block" v-if="currentItem.Shop">
      <view class="block_title">供货商家</view>
      <!-- <view class="block_content" @click.stop="$navigate.To('/pages/shop/shop?shopId='+currentItem.Shop.Id)"> -->
      <view class="block_content">
        <view class="doc flex-r-ac">
          <div>
            <img class="img-circle thumb64" :src="currentItem.Shop.LogoImageUrl+'!w100h100'" />
          </div>
          <div class="flex-c px-lg">
            <p class="title">{{currentItem.Shop.ShopName}}</p>
            <p>地址:{{currentItem.Shop.ShopAddress}}</p>
            <p>电话:{{currentItem.Shop.ShopKeFuTel}}</p>
            <p>
              <van-button size="small" type="primary" @click.stop="joinShop">申请成为Ta的团长</van-button>
            </p>
          </div>
        </view>
      </view>
    </view>
    <!-- endblock -->
    <view class="spacing"></view>
    <view class="block">
      <view class="block_title">商品详情</view>
      <view class="block_content">
      </view>
    </view>
    <view class="htmlContent">
      <wxparser :rich-text="currentItem.Desc" />
    </view>
    <div style="height:5vh;"> </div>
    <view class="spacing"></view>

    <van-goods-action>
      <van-goods-action-icon icon="home" text="返回" @click="back" />
      <van-goods-action-icon icon="chat" text="客服" open-type="contact" />
      <!-- <van-goods-action-icon  @click="onClickIcon" icon="cart" text="购物车" :info="total>0?total:''"  /> -->
      <!-- <van-goods-action-button @click="addCart" text="加入购物车" type="warning" /> -->
      <van-goods-action-button type="primary" text="立即购买" @click="getpay()" />
    </van-goods-action>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>
<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "../../utils/index";
import Toast from "../../../static/dist/toast/toast";
export default {
  onLoad(options) {
    if (!options.id) wx.navigateBack();
    wx.setNavigationBarTitle({ title: "商品详情" });
  },
  onPullDownRefresh: function() {
    this.load();
    wx.stopPullDownRefresh();
  },
  onReady() {},
  mounted() {
    this.load();
  },
  computed: {
    ...mapState(["userInfo", "cartItems", "buyItems", "total", "currentItem"])
  },
  methods: {
    ...mapMutations(["SET_ITEM"]),
    ...mapActions(["add_to_cart"]),
    load() {
      let that = this;
      this.currentItem = {};
      that.SET_ITEM({});
      let id = this.$root.$mp.query.id;
      this.$api.getItemDetail({ id }).then(res => {
        console.log(res);
        that.SET_ITEM(res);
      });
    },
    joinShop() {
      this.$api.joinShop(this.currentItem.ShopId).then(res => {
        console.log(res);
      });
    },
    getItem() {
      var current = this.buyItems.filter(
        z => z.BuyItem.Id == this.$root.$mp.query["id"]
      )[0];
      return current;
    },
    back() {
      wx.navigateBack();
    },
    addCart() {
      let item = this.getItem();
      console.log(item);
      if (item.BuyItem) {
        if (new Date(item.BuyItem.DateTimeEnd) < new Date()) {
          Toast.fail("已结束");
          return;
        }
        item.Count = 1;
        this.add_to_cart(item).then(res => {
          wx.navigateTo({ url: "/pages/index/pay" });
        });
      }
    },
    getpay() {
      this.addCart();
    },
    previewImage(e) {
      console.log(e);
      var that = this;
      wx.previewImage({
        current: that.currentItem.LogoList[e],
        urls: that.currentItem.LogoList // 需要预览的图片http链接列表
      });
    },
    onClickButton() {},
    onClickIcon() {
      // console.log("go to cart");
      wx.switchTab({ url: "/pages/index/cart" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.doc {
  .title {
    font-size: $font-lg;
    color: $dark;
  }
  p {
    padding-top: 8rpx;
  }
}
.swiper {
  width: 100vw;
  height: 662rpx;
  .slide-image {
    width: 100%;
    height: 100%;
  }
}

image.wxParser-img {
  width: 100%;
}
.details-msg {
  width: 90vw;
  border-top: 1px solid #ededed;
  padding: 30rpx 30rpx;
  background: #fff;
  .details-title {
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    font-size: 30rpx;
    color: #333;
  }
  .details-introduction {
    color: #999;
    font-size: 28rpx;
    line-height: 40rpx;
    margin-top: 20rpx;
  }
  .details_pinfo {
    padding: 20rpx 0;
    position: relative;
    display: flex;
    align-items: center;
    .price {
      color: #f73c3c;
      font-size: 45rpx;
    }
    .other-price {
      font-size: 28rpx;
      padding-left: 40rpx;
    }
    .share-box {
      text-align: center;
      font-size: 20rpx;
      padding-left: 50rpx;
      flex: 1;
    }
    .icon-share {
      display: block;
      padding-bottom: 5rpx;
      font-size: 40rpx;
    }

    .order_time {
      position: absolute;
      right: 170rpx;
      top: 0rpx;
    }
  }
}

van-tag._van-tag {
  margin: 5rpx 24rpx 5rpx 0;
}

.order_num {
  width: 90vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 108rpx;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 0 30rpx;
  .doc {
    color: #808080;
    .num {
      color: #f73c3c;
    }
  }
}

.block {
  width: 90vw;
  padding: 27rpx 0rpx;
  background: #fff;
  .block_title {
    color: #000;
    height: 30rpx;
    line-height: 30rpx;
    border-left: 6px solid #f73c3c;
    padding-left: 20rpx;
  }
  .block_content {
    padding: 38rpx 22rpx;
    .process {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 24rpx;
      margin: 0 auto;
      border: 1px solid #999999;
      padding: 10rpx;
      border-radius: 200px;
      text-align: center;
      margin-bottom: 25rpx;
      color: #808080;
    }
    .doc {
      color: #808080;
      font-size: 26rpx;
      line-height: 30rpx;
    }
  }
  .table {
    margin: 0 auto;
    margin-top: -24rpx;
    .th {
      display: flex;
      justify-content: space-between;
      margin-top: 24rpx;
    }
    .tr {
      font-size: 26rpx;
      color: #808080;
      text-align: left;
      flex: 1;
    }
  }
}

.htmlContent {
  width: 90vw;
}
</style>
