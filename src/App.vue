<script>
import { mapMutations, mapActions } from "vuex";
export default {
  created() {
    this.getUserInfo().then(res => {});
  },
  methods: {
    ...mapMutations(["SET_OPENID"]),
    ...mapActions(["setUserInfo"]),
    getUserInfo() {
      var that = this;
      return new Promise((resolve, reject) => {
        wx.login({
          success: logRes => {
            // if (!wx.getStorageSync('token'))
            that.$api.code2session(logRes.code).then(res => {
              if (res) {
                this.SET_OPENID(res);
              }
              if (res.token) {
                wx.setStorageSync("token", res.token);
                wx.getUserInfo({
                  success: res => {
                    this.setUserInfo(res);
                    return resolve();
                  }
                });
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
