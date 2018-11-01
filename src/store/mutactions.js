export const mutations = {

  SET_MY_SHOP: (state, v) => state.myShops = v,

  SET_PARTNERSHOPS: (state, v) => state.partnerShops = v,

  SET_MY_BUYITEM_LIST: (state, v) => {
    console.log("SET_MY_BUYITEM_LIST")
    state.myBuyItems = v
  },

  SET_MY_ORDER: (state, v) => state.myOrders = v,

  USER_INFO: (state, v) => {
    console.log("SET USERINFO TO", v)
    wx.setStorageSync("userInfo", v);
    state.userInfo = v
  },
  SET_ITEM: (state, v) => {
    console.log("SET_ITEM to" + v);
    state.currentItem = v
  },
  PARTNER: (state, v) => {
    state.partner_list = v
  },
  //选中的团长
  SET_SELECT_PARTNER: (state, v) => {
    console.log("SET my_partner To", v)
    wx.setStorageSync("my_partner", v);
    state.my_partner = v;
  },
  //自己是不是团长
  SET_PARTNER: (state, v) => {
    console.log("我的团长信息", v);
    state.partner = v;
  },
  SET_BUYITEMLIST: (state, v) => {
    if (v && v.length > 0) {
      v.forEach(element => {
        element.Count = 0;
      });
      state.buyItems = v;
      wx.setStorageSync("SET_BUYITEMLIST", v);
    } else {
      state.buyItems = [];
      wx.setStorageSync("SET_BUYITEMLIST", []);
    }
  },
  SET_OPENID: (state, v) => {
    console.log("SET_OPENID To", v)
    wx.setStorageSync("openid", v);
    state.openid = v;
  },
  SET_POSITION: (state, v) => {
    console.log("SET_POSITION To", v)
    state.position = Object.assign({}, state.position, v);
    wx.setStorageSync("SET_POSITION", state.position);
  },

  SET_ORDERS: (state, v) => {
    console.log("SETORDERS", v);
    state.orders = v;
  },

  SET_SHOP_BUYITEMS: (state, {
    shopId,
    payload
  }) => {
    state.shopBuyItems = payload;
    console.log(state.shopBuyItems);
  },
  SET_REALNAMEINFO: (state, v) => state.realNameInfo = v,
  ADD_TO_CART: (state, v) => {
    //v.Count += 1;
    // state.cartItems = [...state.cartItems.filter(z => z.Partner_Id != state.my_partner.Id), ...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)]
    // state.cartItems = [...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)]
    if (v)
      state.cartItems = [v];
    else
      state.cartItems = [...state.buyItems.filter(z => z.Count > 0 && z.Partner_Id == state.my_partner.Id)];
    state.total = state.cartItems.reduce((c, n) => c + n.Count, 0);
    state.totalPrice = state.cartItems.reduce((c, n) => c + (n.BuyItem.Price * n.Count), 0);
    state.totalVipPrice = state.cartItems.reduce((c, n) => c + (n.BuyItem.VipPrice * n.Count), 0);
    console.log(state.cartItems, state.total, state.totalPrice, state.totalVipPrice);
  }
}
export default
mutations
;
