const getters = {

  //未付款订单
  waitForPay: state => state.myOrders.filter(x => !x.IsSuccessPay),
  waitForPayCount: (state, getters) => getters.waitForPay.length,

  //已支付订单
  paidOrder: state => state.myOrders.filter(x => x.IsSuccessPay),
  paidOrderCount: (state, getters) => getters.paidOrder.length,


}
export default getters;
