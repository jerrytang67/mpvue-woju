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
    enablePullDownRefresh: true,
    usingComponents: {
      "wxparser": "plugin://wxparserPlugin/wxparser"
    }
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
  path: 'pages/item/addItem',
  config: {
    navigationBarTitleText: '新建商品',
    usingComponents: {
      "van-field": "/static/dist/field/index"
    }
  },
}, {
  path: 'pages/logs/logs',
  config: {
    navigationBarTitleText: ''
  },
}]
