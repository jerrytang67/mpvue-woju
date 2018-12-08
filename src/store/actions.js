import api from '../utils/api';

export const actions = {

  //我的页面进入
  get_setting: ({
    commit
  }, v) => {
    return new Promise((resolve, reject) => {
      api.get_setting()
        .then(res => {
          commit("SET_MY_SHOP", res.myShops);
          commit("SET_MY_ORDER", res.myOrders);
          commit("SET_PARTNER", res.partner);
          return resolve();
        })
        .catch(err => reject(err));
    })
  },

  setUserInfo: (context, v) => {
    context.commit("USER_INFO", v);
    if (v) {
      api.postUserInfo2(v).then(res => {
        wx.setStorageSync("token", res.token);
        context.commit("SET_OPENID",res);
      });
    }
  },
  //选中团长
  select_partner: (context, v) => {
    return new Promise((resolve, reject) => {
      context.commit("SET_SELECT_PARTNER", v)
      return resolve()
    });
  },

  //加入购物车
  add_to_cart: ({
    commit
  }, v) => {
    return new Promise((resolve, reject) => {
      commit("ADD_TO_CART", v)
      return resolve();
    });
  },

  getOrders: ({
    commit
  }, v) => api.getOrders(v).then(res => {
    commit("SET_ORDERS", res);
  }),

  getShopBuyItems: ({
    commit
  }, v) => api.getShopBuyItems(v).then(res => {
    commit("SET_SHOP_BUYITEMS", {
      shopId: v,
      payload: res
    });
  }),

  getPartnerSetting: ({
    commit
  }, v) => api.getPartnerSetting(v).then(res => {
    commit("SET_MY_BUYITEM_LIST", res.myBuyItems);
    commit("SET_PARTNERSHOPS", res.myShops);
  }),

  //从团长商品长删除一列
  deleteMyItem: ({
    commit,
    state
  }, itemId) => {
    const items = state.myBuyItems.filter(z => z.BuyItem.Id != itemId);
    commit("SET_MY_BUYITEM_LIST", items);
  },
  
  //商家删除商品
  deleteBuyItem: ({commit,state}, itemId) => {
    console.log("商家删除商品", itemId);
    api.SetBuyItem(itemId, "delete").then(res => {
      if (res) {
        const item = state.shopBuyItems.filter(z => z.Id != itemId);
        commit("SET_SHOP_BUYITEMS", {
          payload: item
        });
      }
    })

  },
  getRealNameInfo: ({commit}, v) => {
    console.log("action getRealNameInfo");
    return new Promise((resolve, reject) => {
      api.getRealNameInfo().then(res => {
        if (res) {
          commit("SET_REALNAMEINFO", res);
          return resolve(res);
        }
        return reject();
      })
    })
  },

}

export default actions;
