// pages.js

const usingComponents = {
  "van-button": "/static/dist/button/index",
  "van-toast": "/static/dist/toast/index",
  "van-tag": "/static/dist/tag/index",
  "van-icon": "/static/dist/icon/index",

  "van-row": "/static/dist/row/index",
  "van-col": "/static/dist/col/index",
  "van-cell": "/static/dist/cell/index",
  "van-switch-cell": "/static/dist/switch-cell/index",
  "van-switch": "/static/dist/switch/index",
  "van-panel": "/static/dist/panel/index",

  "van-card": "/static/dist/card/index",

  "van-tabbar": "/static/dist/tabbar/index",
  "van-tabbar-item": "/static/dist/tabbar-item/index",
  "van-goods-action": "/static/dist/goods-action/index",
  "van-goods-action-icon": "/static/dist/goods-action-icon/index",
  "van-goods-action-button": "/static/dist/goods-action-button/index",
  "van-dialog": "/static/dist/dialog/index",

  "demo-block": "/static/demo-block/index"
}

module.exports = [{
    path: 'pages/index/index',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {
        "van-notice-bar":"/static/dist/notice-bar/index"
      })
    }
  },
  {
    path: 'pages/index/cart',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {
        "van-submit-bar": "/static/dist/submit-bar/index",
        "van-stepper": "/static/dist/stepper/index"
      })
    }
  },
  {
    path: 'pages/index/pay',
    config: {
      navigationBarTitleText: '支付',
      usingComponents: Object.assign({}, usingComponents, {
        "van-submit-bar": "/static/dist/submit-bar/index",
        "van-stepper": "/static/dist/stepper/index"
      })
    }
  },
  {
    path: 'pages/index/my',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/index/choosePartner',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {})

    }
  },
  {
    path: 'pages/item/itemDetail',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {
        "wxparser": "plugin://wxparserPlugin/wxparser"
      })
    }
  },
  {
    path: 'pages/index/address',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {
        "van-search": "/static/dist/search/index"
      })
    }
  },
  {
    path: 'pages/shop/addItem',
    config: {
      navigationBarTitleText: '新建商品',
      usingComponents: Object.assign({}, usingComponents, {
        "van-field": "/static/dist/field/index",
        "van-checkbox": "/static/dist/checkbox/index",
        "van-checkbox-group": "/static/dist/checkbox-group/index",
        "van-radio": "/static/dist/radio/index",
        "van-radio-group": "/static/dist/radio-group/index"
      })
    }
  },
  {
    path: 'pages/logs/logs',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/shop/buyItems',
    config: {
      navigationBarTitleText: '店铺商品列表',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/shop/orders',
    config: {
      navigationBarTitleText: '店铺订单',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {
        "van-tab": "/static/dist/tab/index",
        "van-tabs": "/static/dist/tabs/index"
      })
    }
  },
  {
    path: 'pages/partner/map',
    config: {
      navigationBarTitleText: '地图',
      // enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/partner/myBuyItems',
    config: {
      navigationBarTitleText: '管理我的商品',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {
        "van-tab": "/static/dist/tab/index",
        "van-tabs": "/static/dist/tabs/index",
        "van-badge": "/static/dist/badge/index",
        "van-badge-group": "/static/dist/badge-group/index"
      })
    }
  },
  {
    path: 'pages/order/orders',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {
        "van-tab": "/static/dist/tab/index",
        "van-tabs": "/static/dist/tabs/index"
      })
    }
  },
  {
    path: 'pages/partner/orders',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {
        "van-tab": "/static/dist/tab/index",
        "van-tabs": "/static/dist/tabs/index"
      })
    }
  },
  {
    path: 'pages/shop/shop',
    config: {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/index/realNameSys',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {
        "van-steps": "/static/dist/steps/index",
        "van-field": "/static/dist/field/index",
        "van-checkbox": "/static/dist/checkbox/index",
        "van-checkbox-group": "/static/dist/checkbox-group/index",
        "van-radio": "/static/dist/radio/index",
        "van-radio-group": "/static/dist/radio-group/index"
      })
    }
  },
  {
    path: 'pages/index/login',
    config: {
      usingComponents: Object.assign({}, usingComponents, {})
    }
  },
  {
    path: 'pages/partner/edit',
    config: {
      navigationBarTitleText: '',
      usingComponents: Object.assign({}, usingComponents, {
        "van-steps": "/static/dist/steps/index",
        "van-field": "/static/dist/field/index",
        "van-checkbox": "/static/dist/checkbox/index",
        "van-checkbox-group": "/static/dist/checkbox-group/index",
        "van-radio": "/static/dist/radio/index",
        "van-radio-group": "/static/dist/radio-group/index"
      })
    }
  }
]
