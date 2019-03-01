<template>
  <div style="margin:15rpx">
    <van-card
      :tag="data.PickUpType"
      :num="data.count"
      :price="data.price/100"
      class="card"
      :thumb="data.LogoImgUrl?data.LogoImgUrl+'!w100h100':'/static/images/no-image.png'"
      @click.stop="onClick(data)"
    >
      <view
        slot="title"
        class="title"
      >#{{data.Id}} {{data.body}}</view>
      <view
        slot="tags"
        class="tags"
      >
        <div>
          合计:
          <span class="price">￥{{data.totalprice/100}}</span>
        </div>
      </view>
      <view
        slot="footer"
        class="footer"
      >
        <block v-if="type==='user'">
          <!-- <van-button size="small" type="primary" v-if="!data.IsSuccessPay" @click="pay(data.Id)">付款</van-button> -->
        </block>
        <block v-if="type==='partner'">
          <van-button
            size="small"
            type="primary"
            v-if="data.IsSuccessPay && !data.IsCheckOut && data.PickUpType === '团长处自提' && data.ProductState !== '可取货'"
            @click.stop="pick(data.Id)"
          >通知取货</van-button>
        </block>
        <block v-if="type==='shop'">
          <van-button
            size="small"
            type="primary"
            v-if="data.IsSuccessPay && !data.IsCheckOut && data.PickUpType === '到店自提'"
          >通知取货</van-button>
        </block>
      </view>
    </van-card>
    <van-popup
      :show="isShow"
      overlay="true"
      @close="onClose"
    >
      <demo-block
        class="order_info"
        title="订单信息"
      >
        <view style="width:90vw;padding:15px;">
          <div v-if="data.CountItem">
            <view
              v-for="(x,index ) in items"
              :key="index"
            >
              <van-tag
                size="large"
                plain
                type="danger"
              >数量 {{x.Count}}</van-tag> × {{x.Name}} <van-tag
                color="#7232dd"
                plain
                size="large"
              >单价 ￥{{x.Price}}</van-tag>
            </view>
          </div>
          <div v-if="data.RealName">
            <van-tag
              mark
              type="primary"
            >收货人 姓名</van-tag>
            {{data.RealName}}
          </div>
          <div v-if="data.Address">
            <van-tag
              mark
              type="primary"
            >收货人 地址</van-tag>
            {{data.Address}}
          </div>
          <div v-if="data.TelPhone">
            <van-tag
              mark
              type="primary"
            >收货人 电话</van-tag>
            {{data.TelPhone}}
          </div>
          <div>
            <van-tag
              mark
              type="primary"
            >提货方式</van-tag>
            {{data.PickUpType}}
          </div>
          <div v-if="data.KeFuTel">
            <van-tag
              mark
              type="primary"
            >商家客服电话</van-tag>: {{data.KeFuTel}}
            <van-button
              size="small"
              type="primary"
              @click="call"
            >拨打</van-button>
          </div>
          <div v-if="weixinName">
            <van-tag
              mark
              type="primary"
            >商家微信号</van-tag> {{weixinName}}
            <van-button
              size="small"
              type="primary"
              @click="copy"
            >复制</van-button>
          </div>
          <div v-if="data.Comment">
            <van-tag
              mark
              type="primary"
            >备注</van-tag> {{data.Comment}}
          </div>
        </view>
      </demo-block>
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  onReady() {},
  props: ["data", "type"],
  computed: {
    ...mapState(["openid"]),
    items: function() {
      return JSON.parse(this.data.CountItem);
    }
  },
  data() {
    return {
      isShow: false,
      selected: undefined,
      weixinName: undefined
    };
  },
  methods: {
    call() {
      let that = this;
      wx.makePhoneCall({
        phoneNumber: that.data.KeFuTel //仅为示例，并非真实的电话号码
      });
    },
    onClick(item) {
      console.log(item);
      console.log(this.data);
      this.$api.getShop({ shopId: this.data.ShopId, p: false }).then(res => {
        this.weixinName = res.WeixinName;
      });
      this.isShow = true;
    },
    onClose() {
      this.isShow = false;
    },
    pay(e) {
      console.log(this.openid);
      console.log(e);
    },
    pick(e) {
      console.log(e);
      this.$api.noticeToPickUP(e);
    },
    copy() {
      var that = this;
      wx.setClipboardData({
        data: that.weixinName,
        success: function(res) {
          wx.getClipboardData({
            success: function(res) {
              wx.showToast({
                title: "复制微信名成功",
                icon: "success",
                duration: 1000
              });
            }
          });
        }
      });
    } //end copy
  }
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
.tags {
  display: flex;
  flex-direction: column;
  .price {
    color: $danger;
    font-size: $font-lg;
  }
}
.van-card__title {
  font-size: $font-lg;
}
.order_info {
  div {
    margin-bottom: 15px;
  }
}
</style>
