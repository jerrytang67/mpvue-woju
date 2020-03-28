// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutactions';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const state = {
  searchHistory: wx.getStorageSync("searchHistory") || [],
  openid: wx.getStorageSync("openid"),
  unionid: wx.getStorageSync("unionid"),
  test: 0,
  currentItem: {},
  userInfo: {},
  partner_list: [],

  //选中的团长
  my_partner: wx.getStorageSync("my_partner") || {"Realname":"唐晓峰","Phone":"18913712580","nickname":"旷山¹(旷山®创酷)","headimgurl":"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJjkibwInXV0IC7tqJQVKD7rqwP0BNBYqdpoo5UYML27pHtt5Xia7gc92heicEBwSlFR9AiaepozHEKSg/132","weixin":null,"LocationLabel":"丽湾国际","LocationAddress":"江苏省苏州市吴江区仲英大道","Id":12,"StoreId":6},
  buyItems: wx.getStorageSync("SET_BUYITEMLIST") || [],
  position: wx.getStorageSync("SET_POSITION") || {},
  cartItems: [],
  total: 0,
  totalPrice: 0,
  totalVipPrice: 0,

  //实名制
  realNameInfo: {},
  //自己的团长信息
  partner: {},
  myOrders: [],

  //店主用
  myShops: [],
  myBuyItems: [],

  //订单
  orders: [],
  shopBuyItems: [],

  //团长加入的商店
  partnerShops: []
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
