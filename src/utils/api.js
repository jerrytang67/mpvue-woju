import util from './utils' // 此处，引入存放对promise处理的文件
//const ip = 'http://192.168.1.181:8088/api' // 后台的ip地址
const ip = 'https://www.lovewujiang.com/api' // 后台的ip地址

const getRequest = util.httpsPromisify(wx.request)

const request = (method, url, data = {}) => { // method为请求方法，url为接口路径，data为传参
  return getRequest({
    url: (url.startsWith("http") ? '' : ip) + url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json',
      'Authorization' :wx.getStorageSync('token')
    }
  })
}
const Rad = (d) => {
  return d * Math.PI / 180.0; //经纬度转换成三角函数中度分表形式。
}

export default {

  getItemDetail: ({
    id
  }) => request('get', `/V1/GetBuyItem?id=${id}`),

  getPartner: ({ pid }) => request('get', `/partner/getPartner?pid=${pid}`, null),

  loadPartnerList: ({Lat,Lng}) => request('get', '/partner/get?myLat=' + Lat + '&myLng=' + Lng + '&dis=3000', null),

  loadPartnerItems: pid => request('get', '/partner/getBuyItems?pid=' + pid, {}),

  code2session: code => request('get', '/V1/code2session?appid=wxd9d182e54258695e&code=' + code, {}),

  getPay: itemId => request('get', '/V1/getpay?partner_Id=' + wx.getStorageSync("SET_SELECT_PARTNER").Id + '&itemid=' + itemId + '&openid=' + wx.getStorageSync("openid"), ),

  placeSuggestion: ({query,region}) => request('get', `/v1/PlaceSuggestion?ak=f8vW5GLQR7CaKA52XsxGXpR0&query=${query}&region=${region}&type=gcj02`, null),

  getPois: params => request('get', '/v1/GetPios?ak=f8vW5GLQR7CaKA52XsxGXpR0&lat=' + params.lat + '&lng=' + params.lng + '&type=' + params.type),

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
