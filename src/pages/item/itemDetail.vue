<template>
  <div
    class="container"
    style="background:#fff;"
  >
    <div style="position:relative;">
      <swiper
        indicator-dots="true"
        autoplay="true"
        interval="5000"
        duration="500"
        class="swiper"
      >
        <block
          v-for="(x,$index) in currentItem.LogoList"
          :key="x"
        >
          <swiper-item>
            <image
              :src="x+'!w500'"
              class="slide-image"
              mode="aspectFill"
              @click="previewImage($index)"
            />
          </swiper-item>
        </block>
      </swiper>
      <div class="locationLabel flex-r-ac">
        <img
          class="img-circle thumb48"
          :src="my_partner.headimgurl"
          style="margin-right:5px;border:2px solid #fff;"
        />
        <van-tag
          round
          type="danger"
          class="locationLabel-tag"
        >
          <span style="font-size:28rpx;padding:5rpx 10rpx;">{{my_partner.LocationLabel}} 社区</span>
        </van-tag>
      </div>
    </div>
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
        <van-tag
          round
          type="primary"
        >{{currentItem.PickUpType}}</van-tag>
        <van-tag
          round
          type="primary"
          v-if="currentItem.LimitBuyCount==0"
        >不限购</van-tag>
        <van-tag
          round
          type="primary"
          v-else
        >每人限购{{currentItem.LimitBuyCount}}件</van-tag>
        <div style="float:right;">
          <button
            type="default" size="mini" round
            @click="openModal"
          >海报
          </button>
        </div>
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

    <view
      class="block"
      v-if="currentItem.Shop"
    >
      <view class="block_title">供货商家</view>
      <!-- <view class="block_content" @click.stop="$navigate.To('/pages/shop/shop?shopId='+currentItem.Shop.Id)"> -->
      <view class="block_content">
        <view class="doc flex-r-ac">
          <div>
            <img
              class="img-circle thumb64"
              :src="currentItem.Shop.LogoImageUrl+'!w100h100'"
            />
          </div>
          <div class="flex-c px-lg">
            <p class="title">{{currentItem.Shop.ShopName}}</p>
            <p>地址:{{currentItem.Shop.ShopAddress}}</p>
            <p>电话:{{currentItem.Shop.ShopKeFuTel}}</p>
            <p>
              <van-button
                size="small"
                type="primary"
                @click.stop="joinShop"
              >申请成为Ta的团长</van-button>
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
      <van-goods-action-icon
        icon="home"
        text="返回"
        @click="back"
      />
      <van-goods-action-icon
        icon="chat"
        text="客服"
        open-type="contact"
      />
      <!-- <van-goods-action-icon  @click="onClickIcon" icon="cart" text="购物车" :info="total>0?total:''"  /> -->
      <!-- <van-goods-action-button @click="addCart" text="加入购物车" type="warning" /> -->
      <van-goods-action-button
        type="primary"
        text="立即购买"
        @click="getpay()"
      />
    </van-goods-action>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
    <van-popup
      :show="modalShow"
      :custom-style="'background-color:transparent;'"
      @click-overlay="openModal"
      :duration="0"
    >
      <canvas
        canvas-id="shareCanvas"
        style="width:700rpx;height:1000rpx;"
      ></canvas>
      <div style="margin:10px auto;text-align:center;">
        <van-button
          type="primary"
          @click.stop="save"
          style="margin:5px;"
        >保存到相册</van-button>
        <van-button
          type="primary"
          style="margin:5px;"
          @click.stop="openModal"
        >关　　闭</van-button>
      </div>

    </van-popup>
  </div>
</template>
<script>
// Use Vuex
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "../../utils/index";
import Toast from "../../../static/dist/toast/toast";
import { promisify } from "../../utils/promisify";

const wxGetImageInfo = promisify(wx.getImageInfo);
const wxCanvasToTempFilePath = promisify(wx.canvasToTempFilePath);
const wxSaveImageToPhotosAlbum = promisify(wx.saveImageToPhotosAlbum);
export default {
  onLoad(options) {
    if (!options.id) wx.navigateBack();
    wx.setNavigationBarTitle({ title: "商品详情" });
  },
  onShareAppMessage: res => {
    let select_partner = wx.getStorageSync("my_partner");
    let currentItem = wx.getStorageSync("currentItem");

    if (select_partner && currentItem)
      return {
        title: currentItem.Name,
        path: `/pages/item/itemDetail?pid=${select_partner.Id}&id=${
          currentItem.Id
        }`
      };
  },
  data: {
    pid: 1,
    modalShow: false
  },
  onPullDownRefresh: function() {
    this.load();
    wx.stopPullDownRefresh();
  },
  onReady() {
    var that = this;
    var query = that.$root.$mp.query;
    if (query.pid) {
      that.$api.getPartner({ pid: query.pid }).then(res => {
        that.SET_SELECT_PARTNER(res); //store set the current partner
      });
      that.$api.loadPartnerItems(that.$root.$mp.query.pid).then(res => {
        if (res) that.SET_BUYITEMLIST(res); //store set current buyitem list
      });
    }
  },
  onUnload() {
    console.log("销毁前");
    this.modalShow = false;
  },
  mounted() {
    this.load();
  },
  computed: {
    ...mapState([
      "userInfo",
      "cartItems",
      "buyItems",
      "total",
      "currentItem",
      "my_partner"
    ])
  },
  methods: {
    ...mapMutations(["SET_ITEM", "SET_BUYITEMLIST", "SET_SELECT_PARTNER"]),
    ...mapActions(["add_to_cart"]),
    onClose() {},
    openModal() {
      var that = this;

      var rpx;
      //获取屏幕宽度，获取自适应单位
      wx.getSystemInfo({
        success: function(res) {
          rpx = res.windowWidth / 750;
          console.log(res.windowWidth);
          console.log(rpx);
        }
      });

      Promise.all([
        wxGetImageInfo({src:that.currentItem.LogoList[0].replace(/http:/i, "https:") + "!wh500"}),
        wxGetImageInfo({src: `https://www.lovewujiang.com/woju/getPartnerQR?pid=${that.my_partner.Id}&itemId=${that.currentItem.Id}&storeId=6`})
      ]).then(
        res => {
          console.log(res);
          const ctx = wx.createCanvasContext("shareCanvas");
          const ctxW = 700 * rpx;
          const ctxH = 1000 * rpx;
          const space = 35 * rpx;
          const space_lg = 46 * rpx;
          const tLength = that.currentItem.Name.length;
          const tPrice = that.currentItem.VipPrice;
          const nickname = that.my_partner.nickname;
          const qrtext = '长按识别，即可查看商品';
          const label = that.my_partner.LocationLabel;
          let nowH = 0;
          /* 绘制白色背景 todo:以图片代替*/
          ctx.rect(0, 0, ctxW, ctxH);
          ctx.setFillStyle("white");
          ctx.fillRect(0, 0, ctxW, ctxH);
          /* 底图 */
          ctx.drawImage(res[0].path,space_lg,space_lg,ctxW - 2 * space_lg,ctxW - 2 * space_lg);
          /* 背景*/
          ctx.setFillStyle("#7B24B3");
          ctx.fillRect(space_lg,0,ctxW - 2 * space_lg,space_lg);
          /*绘制店名*/
           ctx.setFontSize(22*rpx);
           ctx.setFillStyle("#fff");
           ctx.textAlign = "left";
           ctx.fillText(`${label} 社区 ${nickname} 的小店`, space_lg + (5*rpx) ,space);
           ctx.restore();
          /* 绘制产品名称背景 */
          ctx.setFillStyle("#A22CB1");
          ctx.fillRect(space_lg,space_lg + ctxW - 2 * space_lg,ctxW - 2 * space_lg,120 * rpx);
          nowH = space_lg + ctxW - 2 * space_lg + 45 * rpx;
          ctx.setTextAlign("left");
          ctx.setFillStyle("#ffffff");
          ctx.setFontSize(32 * rpx);
          ctx.fillText(
            that.currentItem.Name.substr(0, 16),
            space_lg + space,
            nowH
          );
          nowH = nowH + 45 * rpx;
          if (tLength > 13) {
            ctx.setTextAlign("left");
            ctx.setFillStyle("#ffffff");
            ctx.setFontSize(32 * rpx);
            ctx.fillText(that.currentItem.Name.substr(16, 15) + "...",space_lg + space,nowH); }
          nowH = 800 * rpx;
          const qrImgSize = 168*rpx;
           /* 绘制线框*/
          ctx.setLineDash([1, 3], 1);
          ctx.beginPath();
          ctx.moveTo(space_lg, nowH);
          ctx.lineTo(400 * rpx , nowH);
          ctx.moveTo(space_lg, nowH + qrImgSize);
          ctx.lineTo(400 * rpx, nowH + qrImgSize);
          ctx.setStrokeStyle('#979797');
          ctx.restore();
          /*绘制文字*/
          ctx.setFontSize(36 * rpx);
          ctx.setFillStyle('#333333');
          ctx.textAlign = "left";
          ctx.fillText('￥', space_lg+space, nowH + (70*rpx));
          ctx.setFontSize(48*rpx);
          ctx.fillText(tPrice, space_lg + (70*rpx),  nowH + (70*rpx));
          ctx.setFontSize(32 * rpx);
          ctx.setFillStyle('#666666');
          ctx.fillText(qrtext, space_lg, nowH + qrImgSize - (30*rpx));
          ctx.restore();
          // 小程序码
          ctx.drawImage(res[1].path,700 * rpx / 4 * 3 - qrImgSize / 2,800 * rpx,qrImgSize,qrImgSize);

          /*圆形头像*/
          // ctx.save()
          // ctx.beginPath();
          // ctx.arc(35, 30, 20, 0, 2 * Math.PI)
          // ctx.setFillStyle('#fff')
          // ctx.fill()
          // ctx.clip()
          // ctx.drawImage( res[2].path, 15, 10, 40, 40)
          // ctx.restore()
          ctx.stroke();
          ctx.draw();
          //打开窗口
          this.modalShow = !this.modalShow;
        },
        error => {
          wx.showToast({
            title: "海报图片下载失败",
            icon: "none"
          });
        }
      );
    },
    save() {
      wxCanvasToTempFilePath(
        {
          canvasId: "shareCanvas"
        },
        this
      )
        .then(res => {
          return wxSaveImageToPhotosAlbum({
            filePath: res.tempFilePath
          });
        })
        .then(
          res => {
            wx.showToast({
              title: "已保存到相册"
            });
          },
          error => {
            wx.showToast({
              title: "保存失败,请打开保存相册权限!!",
              icon: "none"
            });
          }
        );
    },
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
        Toast.success("申请成功");
        return;
      });
    },
    getItem() {
      var current = this.buyItems.filter(
        z => z.BuyItem.Id == this.$root.$mp.query["id"]
      )[0];
      return current;
    },
    back() {
      var pages = getCurrentPages();
      if (pages.length > 1) wx.navigateBack();
      else wx.switchTab({ url: "/pages/index/index" });
    },
    addCart() {
      let item = this.getItem();
      var that = this;
      console.log(item);
      if (item.BuyItem) {
        if (new Date(that.currentItem.DateTimeEnd) < new Date()) {
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

.locationLabel {
  position: absolute;
  top: 30rpx;
  left: 30rpx;
  z-index: 90;
}
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
