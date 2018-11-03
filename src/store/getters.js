const getters = {
  //未付款订单
  waitForPay: state => state.myOrders.filter(x => !x.IsSuccessPay),
  waitForPayCount: (state, getters) => getters.waitForPay.length,

  //已支付订单
  paidOrder: state => state.myOrders.filter(x => x.IsSuccessPay),
  paidOrderCount: (state, getters) => getters.paidOrder.length,

  //可取货
  canTakeOrder: state => state.myOrders.filter(x => x.ProductState == "可取货"),
  canTakeOrderCount: (state, getters) => getters.canTakeOrder.length,

  orderNotPay: state => state.orders.filter(x => !x.IsSuccessPay),
  orderIsPay: state => state.orders.filter(x => x.IsSuccessPay)
};
export default getters;
