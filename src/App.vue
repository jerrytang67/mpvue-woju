<script>
import { mapMutations } from "vuex";
export default {
  created() {
    this.getUserInfo().then(res => {
    });
  },
  methods: {
    ...mapMutations(["USER_INFO","SET_OPENID"]),
    getUserInfo() {
      var that = this;
      return new Promise((resolve, reject) => {
        wx.login({
          success: logRes => {
            that.$api.code2session(logRes.code).then(res => {
              if (res.openid) {
                this.SET_OPENID(res.openid);
              }
              if (res.token) {
                wx.setStorageSync("token", res.token);
              }
            });
            wx.getUserInfo({
              success: res => {
                this.USER_INFO(res);
                return resolve();
              }
            });
          },
          fail: error => {
            return reject(error);
          }
        });
      });
      // 调用登录接口
    }
  }
};
</script>

<style lang="scss">
// @import "styles/custom.scss";
@import "styles/commom.scss";
</style>
