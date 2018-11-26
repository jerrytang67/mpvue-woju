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
            wx.getUserInfo({
              success: res => {
                res.code = logRes.code;
                this.setUserInfo(res);
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
