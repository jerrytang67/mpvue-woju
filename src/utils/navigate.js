export default {
  To: (url) => wx.navigateTo({
    url
  }),
  Tab: ({
    url,
    index
  }) => {
    wx.setStorageSync("Tab_Select_index", index);
    wx.switchTab({
      url
    })
  }



}
