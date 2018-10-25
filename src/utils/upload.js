//const Upyun = require('./upyun-wxapp-sdk')
import Upyun from './upyun-wxapp-sdk'
import Tips from './Tips'
import {
  resolve
} from 'path';
const upyun = new Upyun.Upyun({
  bucket: 'wjhaomama',
  operator: 'tjw',
  getSignatureUrl: 'https://www.lovewujiang.com/api/v1/get_signature'
});

export default {
  upload() {
    return new Promise((resolve, reject) => {
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          const imageSrc = res.tempFilePaths[0]
          const path = `wxapp/${wx.getStorageSync('openid')}/${imageSrc.split('//')[1]}`;
          upyun.upload({
            localPath: imageSrc,
            remotePath: path,
            success: function (res) {
              return resolve(path);
            },
            fail: ({
              errMsg
            }) => {
              console.log('uploadImage fail, errMsg is', errMsg);
              return reject(errMsg);
            }
          })
        },
        fail: ({
          errMsg
        }) => {
          console.log('chooseImage fail, err is', errMsg)
          return reject(errMsg);
        }
      })
    })
  }
}
