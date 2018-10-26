// pages.js
module.exports = [{
  path: 'pages/index/index',
  config: {
    navigationBarTitleText: '',
    enablePullDownRefresh: true
  },
}, {
  path: 'pages/index/cart',
  config: {
    navigationBarTitleText: '',
    usingComponents: {
      "van-submit-bar": "/static/dist/submit-bar/index",
    }
  },
}, {
  path: 'pages/index/my',
  config: {
    navigationBarTitleText: '',
    enablePullDownRefresh: true
  },
}, {
  path: 'pages/index/choosePartner',
  config: {
    navigationBarTitleText: ''
  },
}, {
  path: 'pages/item/itemDetail',
  config: {
    navigationBarTitleText: '',
    enablePullDownRefresh: true
  },
}, {
  path: 'pages/index/address',
  config: {
    navigationBarTitleText: '',
    usingComponents: {
      "van-search": "/static/dist/search/index",
    }
  },
}, {
  path: 'pages/logs/logs',
  config: {
    navigationBarTitleText: ''
  },
}]
