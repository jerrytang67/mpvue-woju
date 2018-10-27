import utils from './utils' // 此处，引入存放对promise处理的文件
import Tip from './Tips'

//自定义设置
const STOREID = 6;
const APPID = "wxd9d182e54258695e"; //小程序 appid
const MAPKEY = "f8vW5GLQR7CaKA52XsxGXpR0"; //百度地图ak
const FIND_DISTANCE = 3000; //团长范围 单位:米

//const ip = 'http://192.168.1.181:8088/api' // 后台的ip地址
const ip = 'https://www.lovewujiang.com/api' // 后台的ip地址

const getRequest = utils.httpsPromisify(wx.request)
const request = (method, url, data = {}) => { // method为请求方法，url为接口路径，data为传参
  Tip.loading();
  return getRequest({
    url: (url.startsWith("http") ? '' : ip) + url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json',
      'Authorization': wx.getStorageSync('token')
    }
  })
}

export default {
  code2session: code => request('get', `/WoJu/code2session?appid=${APPID}&code=${code}&storeId=${STOREID}`),

  get_setting: () => request("get", `/WoJu/GetSetting`),
  post_buyitem: data => request("post", `/WoJu/PostBuyItem`, data),
  getItemDetail: ({
    id
  }) => request('get', `/WoJu/GetBuyItem?id=${id}`),

  getPartner: ({
    pid
  }) => request('get', `/WoJu/getPartner?pid=${pid}`),

  loadPartnerList: ({
    Lat,
    Lng
  }) => request('get', `/WoJu/get?myLat=${Lat}&myLng=${Lng}&dis=${FIND_DISTANCE}`),

  loadPartnerItems: pid => request('get', `/WoJu/getBuyItems?pid=${pid}`),

  getPay: itemId => request('get', `/WoJu/getpay?partner_Id=${wx.getStorageSync("SET_SELECT_PARTNER").Id}&itemid=${itemId }&openid=${wx.getStorageSync("openid")} `),

  placeSuggestion: ({
    query,
    region
  }) => request('get', `/WoJu/PlaceSuggestion?ak=${MAPKEY}&query=${query}&region=${region}&type=gcj02`),

  getPois: params => request('get', `/WoJu/GetPios?ak=${MAPKEY}&lat=${params.lat}&lng=${params.lng}&type=${params.type}`),

  getMyShop: () => request('get', `/WoJu/GetMyShop`),

  getOrders: ({
    shopId,
    partnerId
  }) => request("get", `/WoJu/GetOrders?shopId=${shopId}&&partnerId=${partnerId}`),

  getShopBuyItems: ({
    shopId,
    partnerId
  }) => request("get", `/WoJu/GetShopBuyItems?shopId=${shopId}`),

  GetDistance: (lat1, lng1, lat2, lng2) => {
    var radLat1 = Rad(lat1);
    var radLat2 = Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Rad(lng1) - Rad(lng2);
    var s = 2 *
      Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里
    return s.toFixed(3);
  },
}

const Rad = (d) => {
  return d * Math.PI / 180.0; //经纬度转换成三角函数中度分表形式。
}
