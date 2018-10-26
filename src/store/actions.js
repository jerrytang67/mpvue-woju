import api from '../utils/api';

export const actions = {
  get_setting: ({
    commit
  }, v) => {
    return new Promise((resolve, reject) => {
      api.get_setting()
        .then(res => {
          commit("SET_MY_SHOP", res.myShops);
          commit("SET_MY_ORDER", res.myOrders);
          return resolve();
        })
        .catch(err => reject(err));
    })

  },
  select_partner: (context, v) => {
    return new Promise((resolve, reject) => {
      context.commit("SET_SELECT_PARTNER", v)
      resolve()
    });
  },
  add_to_cart: ({
    commit
  }, v) => {
    console.log("ADD_TO_CART", v)
    return new Promise((resolve, reject) => {
      commit("ADD_TO_CART", v)
      resolve;
    });
  }
}

export default actions;
