//const Upyun = require('./upyun-wxapp-sdk')
import Upyun from './upyun-wxapp-sdk'
import moment from "moment"
const upyun = new Upyun.Upyun({
  bucket: 'wjhaomama',
  operator: 'tjw',
  getSignatureUrl: 'https://www.lovewujiang.com/api/v1/get_signature'
});

export function upload() {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const imageSrc = res.tempFilePaths[0]
        const fileExt = imageSrc.replace(/.+\./, "");
        const fileName = moment(new Date).format("YYYY/MM/HHmmss") + "." + fileExt
        const path = `wxapp/${wx.getStorageSync('openid')}/${fileName}`;
        upyun.upload({
          localPath: imageSrc,
          remotePath: path,
          success: function (res) {
            return resolve(path);
          },
          fail: ({
            errMsg
          }) => {
            return reject(errMsg);
          }
        })
      },
      fail: ({
        errMsg
      }) => {
        return reject(errMsg);
      }
    })
  })
}

export default {
  upload
}
