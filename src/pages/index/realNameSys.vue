<template>
  <div class="container">
    <div class="contentBody">
      <div style="padding:24rpx 32rpx;">
        <van-steps :steps="steps" active="0" />
        <demo-block title="实名认证基本信息">
          <van-cell-group>
            <van-field label="姓名" :value="item.RealName" required @change="onChange" data-name="RealName" />
            <van-field label="手机号" disabled :value="item.Telphone" type="number" required @change="onChange" data-name="Telphone" use-button-slot>
              <van-button slot="button" size="small" type="primary" @getphonenumber="getPhoneNumber" open-type="getPhoneNumber">微信授权获取</van-button>
            </van-field>
            <van-field type="number" label="联系电话" :value="item.TelphoneBackup" required @change="onChange" data-name="TelphoneBackup" use-button-slot>
              <van-button slot="button" size="small" plain type="primary" @click="btnClick">同上</van-button>
            </van-field>
          </van-cell-group>
        </demo-block>
        <demo-block title="营业执照" v-if="type==1">
          <picUpload :data="item.BusinessLicenseUrl" :limit="1" @onUpdate="onUpdate1"></picUpload>
        </demo-block>
        <demo-block title="身份证-正面">
          <picUpload :data="item.IDCardFrontUrl" :limit="1" @onUpdate="onUpdate2"></picUpload>
        </demo-block>
        <demo-block title="身份证-背面">
          <picUpload :data="item.IDCardBackUrl" :limit="1" @onUpdate="onUpdate3"></picUpload>
        </demo-block>
        <demo-block title="手持身份证-正面 照片">
          <picUpload :data="item.IDCardHandUrl" :limit="1" @onUpdate="onUpdate4"></picUpload>
        </demo-block>
      </div>
    </div>
    <van-goods-action style="z-index:9999;">
      <van-goods-action-icon icon="chat" text="客服" open-type="contact" />
      <van-goods-action-button text="下一步" type="primary" @click="post()" />
    </van-goods-action>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>
<script>
const REALNAMEINFO = {
  RealName: "",
  Telphone: "",
  TelphoneBackup: "",
  IDCardFrontUrl: "",
  IDCardBackUrl: "",
  IDCardHandUrl: "",
  BusinessLicenseUrl: ""
};
import { mapState, mapMutations, mapActions } from "vuex";
import picUpload from "@/components/picUpload";
import { formatTime } from "@/utils/index";
import Toast from "../../../static/dist/toast/toast";
import Tip from "@/utils/Tips";

export default {
  components: {
    picUpload
  },
  onLoad(options) {
    console.log(options);
    if (!options.type < 0) wx.navigateBack();
    this.type = options.type;
    wx.setNavigationBarTitle({
      title: (this.type == 0 ? "团长" : "商家") + " 实名认证"
    });
    this.getRealNameInfo().then(res => {
      if (res) {
        console.log("load from http");
        this.item = res;
      }
    });
  },
  onReady() {
    console.log("onReady");
  },
  data: {
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
    ],
    type: 0,
    selectType: 0,
    Type: ["个人", "企业"],
    item: Object.assign({}, REALNAMEINFO)
  },
  onReady() {},
  computed: {
    ...mapState(["realNameInfo"])
  },
  methods: {
    ...mapActions(["getRealNameInfo"]),
    onUpdate1(e) {
      console.log(e);
      this.item.BusinessLicenseUrl = e;
    },
    onUpdate2(e) {
      this.item.IDCardFrontUrl = e;
    },
    onUpdate3(e) {
      this.item.IDCardBackUrl = e;
    },
    onUpdate4(e) {
      this.item.IDCardHandUrl = e;
    },
    post() {
      var that = this;
      let data = {
        RealName: that.item.RealName,
        Telphone: that.item.Telphone,
        TelphoneBackup: that.item.TelphoneBackup,
        IDCardFrontUrl: that.item.IDCardFrontUrl,
        IDCardBackUrl: that.item.IDCardBackUrl,
        IDCardHandUrl: that.item.IDCardHandUrl
      };
      if (that.type == 1) {
        if (!that.item.BusinessLicenseUrl) {
          Toast.fail("营业执照没有上传");
          return;
        }
        data.BusinessLicenseUrl = that.item.BusinessLicenseUrl;
      }
      that.$api.postRealNameInfo(data).then(res => {
        if (res.Id) {
          Toast.success("提交成功,请审核结果");
          setTimeout(() => {
            if (that.type === 1) wx.navigateBack();
            else wx.navigateTo({url:'/pages/partner/edit'})
          }, 1500);
        }
      });
    },
    btnClick() {
      this.item.TelphoneBackup = this.item.Telphone;
    },
    onChange(e) {
      console.log(e);
      let value = e.mp.detail.value || e.mp.detail;
      let key = e.mp.currentTarget.dataset.name;
      this.item[key] = value;
    },
    getPhoneNumber(e) {
      // console.log(e.mp.detail.errMsg);
      // console.log(e.mp.detail.iv);
      // console.log(e.mp.detail.encryptedData);
      if (e.mp.detail.errMsg.indexOf("ok") > 0) {
        this.$api
          .getPhone({
            iv: e.mp.detail.iv,
            encryptedData: e.mp.detail.encryptedData
          })
          .then(res => {
            const json = JSON.parse(res);
            console.log(json.purePhoneNumber);
            this.item.Telphone = json.purePhoneNumber;
          });
      } else {
        Tip.error(e.mp.detail.errMsg);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
</style>
