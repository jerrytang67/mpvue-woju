// const Tips = require("./Tips")
// const Promise = require('es6-promise').Promise
import Promise from 'es6-promise';
import Tips from './Tips'

function httpsPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        Tips.loaded();
        resolve(res.data)
      }
      obj.fail = function (res) {
        Tips.loaded();
        reject(res)
      }
      fn(obj)
    })
  }
}

export default {
  httpsPromisify
}
// module.exports = {
//   httpsPromisify: httpsPromisify
// }
