export default class Tips {
  constructor() {
    this.isLoading = false;
  }
  /**
   * 弹出加载提示
   */
  static loading(title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true
    });
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading();
    }
  }

  //出错
  static error(msg, duration = 2000) {
    wx.showToast({
      title: `${msg}`,
      image: `/static/images/error-msg.png`,
      duration: duration
    })
  }
}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;
