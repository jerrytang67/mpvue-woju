const getters = {
  //未付款订单
  waitForPay: state => state.myOrders.filter(x => !x.IsSuccessPay),
  waitForPayCount: (state, getters) => getters.waitForPay.length,

  //已支付订单
  paidOrder: state => state.myOrders.filter(x => x.IsSuccessPay && !x.IsCheckOut && x.State!=='退款成功'),
  paidOrderCount: (state, getters) => getters.paidOrder.length,

  //已完成订单
  finishOrder: state => state.myOrders.filter(x => x.IsSuccessPay && x.IsCheckOut),
  finishOrderCount: (state, getters) => getters.finishOrder.length,

  //可取货
  canTakeOrder: state => state.myOrders.filter(x => x.ProductState == "可取货"),
  canTakeOrderCount: (state, getters) => getters.canTakeOrder.length,



  //团长用
  //未付款订单
  orderNotPay: state => state.orders.filter(x => !x.IsSuccessPay),
  orderNotPayCount: (state, getters) => getters.orderNotPay.length,
  //已支付订单
  orderIsPay: state => state.orders.filter(x => x.IsSuccessPay && !x.IsCheckOut),
  orderIsPayCount: (state, getters) => getters.orderIsPay.length,
  //已完成订单
  orderFinish: state => state.orders.filter(x => x.IsSuccessPay && x.IsCheckOut),
  orderFinishCount: (state, getters) => getters.orderFinish.length,
  //待取货
  orderCanTake: state => state.orders.filter(x => x.ProductState == "可取货"),
  orderCanTakeCount: (state, getters) => getters.orderCanTake.length,

  topList: state => state.buyItems.filter(x => x.State >1),
  notopList : state => state.buyItems.filter(x => x.State === 1)
};
export default getters;
