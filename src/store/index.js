// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutactions';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex)

const state = {
  openid: wx.getStorageSync("openid"),
  test: 0,
  currentItem: {},
  userInfo: {},
  partner_list: [],
  my_partner: wx.getStorageSync("SET_SELECT_PARTNER"),
  buyItems: wx.getStorageSync("SET_BUYITEMLIST"),
  position: wx.getStorageSync("SET_POSITION"),
  cartItems: [],
  total: 0,
  totalPrice: 0,
  totalVipPrice: 0,

  myOrders: [],
  //店主用
  myShops: []
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
