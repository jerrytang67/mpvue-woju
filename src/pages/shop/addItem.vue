<template>
  <div class="container">
    <div class="contentBody">
      <div style="padding:20rpx 5vw;">
        <demo-block title="滚动图片">
          <picUpload :data="item.LogoList" limit="4" @onUpdate="onPicUpdate"></picUpload>
        </demo-block>

        <demo-block title="商品详情">
          <van-cell-group>
            <van-field label="商品名称" :value="item.Name" required clearable @change="onChange" data-name="Name" />
            <van-field label="原价" :value="item.Price" type="digit" required clearable @change="onChange" data-name="Price" />
            <van-field label="成交价" :value="item.VipPrice" type="digit" required @change="onChange" data-name="VipPrice" />
            <van-field label="库存" :value="item.Count" type="number" required @change="onChange" data-name="Count" />
            <van-switch-cell title="是否限购" :checked="item.LimitBuyCount>0" @change="toggle('LimitBuyCount')" />
            <van-field label="限购数量" :disabled="item.LimitBuyCount==0" :value="item.LimitBuyCount" type="number" @change="onChange" data-name="LimitBuyCount" />
          </van-cell-group>
        </demo-block>

        <demo-block title="开始时间">
          <van-cell>
            <view slot="title">
              <picker mode="date" :value="item.DateTimeStart" :start="dateStart" :end="dateEnd" @change="onChange" data-name="DateTimeStart">
                <view class="picker flex-between">
                  <span>开始时间</span> <span>{{item.DateTimeStart}}</span>
                </view>
              </picker>
            </view>
          </van-cell>
        </demo-block>
        <demo-block title="结束时间">
          <van-cell>
            <view slot="title">
              <picker mode="date" :value="item.DateTimeEnd" :start="dateStart" :end="dateEnd" @change="onChange" data-name="DateTimeEnd">
                <view class="picker flex-between">
                  <span>结束时间</span> <span>{{item.DateTimeEnd}}</span>
                </view>
              </picker>
            </view>
          </van-cell>
        </demo-block>

        <demo-block title="购前需知">
          <van-cell-group>
            <van-field :value="item.NoticeText" label="购前需知" type="textarea" required autosize @change="onChange" data-name="NoticeText" />
          </van-cell-group>
        </demo-block>

        <demo-block title="商品介绍">
          <van-cell-group>
            <van-field :value="item.Desc" label="商品介绍" type="textarea" required autosize @change="onChange" data-name="Desc" />
          </van-cell-group>
        </demo-block>

        <!-- <demo-block title="展示平台">
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
            </demo-block> -->

        <demo-block title="状态">
          <van-switch-cell title="是否启用" :checked="item.State>0" @change="toggle('State')" />
        </demo-block>

        <demo-block title="取货方式">
          <van-radio-group :value="item.PickUpType" bind:change="onRadioChange">
            <van-cell-group>
              <van-cell title="到店自提" clickable data-name="到店自提" @click="onRadioClick">
                <van-radio name="到店自提" />
              </van-cell>
              <van-cell title="团长处自提" clickable data-name="团长处自提" @click="onRadioClick">
                <van-radio name="团长处自提" />
              </van-cell>
              <van-cell title="商家送货" clickable data-name="商家送货" @click="onRadioClick">
                <van-radio name="商家送货" />
              </van-cell>
              <van-cell title="团长提货送货" clickable data-name="团长提货送货" @click="onRadioClick">
                <van-radio name="团长提货送货" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </demo-block>
      </div>
      <div style="height:15vh;"> </div>
    </div>
    <van-goods-action style="z-index:9999;">
      <van-goods-action-icon icon="chat" text="客服" open-type="contact" />
      <!-- <van-goods-action-icon  @click="onClickIcon" icon="cart" text="购物车" :info="total>0?total:''"  /> -->
      <!-- <van-goods-action-button @click="save()" text="暂存退出" type="warning" /> -->
      <van-goods-action-button text="发布" @click="post()" />
    </van-goods-action>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapMutations, mapActions } from "vuex";
import { formatTime } from "@/utils/index";
import picUpload from "@/components/picUpload";
import Toast from "../../../static/dist/toast/toast";
import Dialog from "../../../static/dist/dialog/dialog";
import Tip from "@/utils/Tips";

const DEFAULTITEM = {
  Name: "",
  LogoList: [],
  Price: null,
  VipPrice: null,
  Count: null,
  LimitBuyCount: 0,
  State: 1,
  ShopId: null,
  DateTimeStart: moment(new Date()).format("YYYY-MM-DD"),
  DateTimeEnd: "",
  ShowType: 0,
  PickUpType: "到店自提"
};
export default {
  components: {
    picUpload
  },
  onLoad(options) {
    //编辑模式
    if (options.itemId) {
      this.itemId = options.itemId;
      this.$api.getItemDetail({ id: this.itemId }).then(res => {
        this.item = res;
        this.item.dateStart = moment(new Date(res.DateTimeStart)).format(
          "YYYY-MM-DD"
        );
        this.item.dateEnd = moment(new Date(res.DateTimeEnd)).format(
          "YYYY-MM-DD"
        );
        this.item.PickUpType = res.PickUpType.toString();
        wx.setNavigationBarTitle({ title: "编辑 " + res.Name });
      });
    } else {
      if (!options.shopId) wx.navigateBack();
      else {
        this.shopId = options.shopId;
        this.item.ShopId = this.shopId;
        wx.setNavigationBarTitle({ title: options.shopName + " 新建商品" });
      }
    }
  },
  onReady() {
    // this.shopId = this.$root.$mp.query.shopId;
    // this.item.ShopId = this.shopId;
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  data: {
    itemId: 0,
    dateStart: moment(new Date()).format("YYYY-MM-DD"),
    dateEnd: moment(new Date())
      .add({ months: 12 })
      .format("YYYY-MM-DD"),
    result2: "1",
    result: ["2"],
    showType: [
      { name: "莴聚小程序", value: "2" },
      { name: "吴江优选", value: "1" }
    ],
    shopId: null,
    item: Object.assign({}, DEFAULTITEM, {}),
    width: "120rpx",
    height: "120rpx"
  },
  methods: {
    onPicUpdate(e) {
      console.log("onPicUpdate", e);
      this.item.LogoList = e;
    },
    onRadioChange(event) {
      console.log(event);
      this.item.PickUpType =
        event.mp.currentTarget.dataset.name || this.item.PickUpType;
    },
    onRadioClick(event) {
      console.log(event);
      this.item.PickUpType =
        event.mp.currentTarget.dataset.name || this.item.PickUpType;
    },
    //发布
    post() {
      // this.item.PickUpType = parseInt(this.item.PickUpType);
      if (!this.itemId) {
        if (!this.shopId) {
          Tip.error("没有选中商家");
          return;
        }
        this.item.ShopId = this.shopId;
      }
      if (!this.item.DateTimeEnd) {
        Tip.error("结束时间不能为空");
        return;
      }
      //位操作.这里加起来
      if (this.result)
        this.result.forEach(element => {
          this.item.ShowType = parseInt(element) + parseInt(this.item.ShowType);
        });
      else this.item.ShowType = 0;

      this.$api.post_buyitem(this.item).then(res => {
        this.item = DEFAULTITEM;
        Tip.error("发布成功");
        setTimeout(() => {
          wx.navigateBack();
        }, 500);
        // Dialog.alert({
        //   title: "success",
        //   message: "发布成功"
        // }).then(() => {
        //   // on close
        // });
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
      console.log(e.mp.detail);
      this.result = e.mp.detail;
    },
    onChange(e) {
      console.log(e);
      let value = e.mp.detail.value || e.mp.detail;
      let key = e.mp.currentTarget.dataset.name;
      this.item[key] = value;
    },
    save() {
      console.log("set key:save_item_" + this.shopId);
      wx.setStorageSync("save_item_" + this.shopId, this.item);
      wx.navigateBack();
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
</style>
