const Promise = require('es6-promise').Promise

function httpsPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res.data)
      }
      obj.fail = function (res) {
        reject(res)
      }
      fn(obj)
    })
  }
}

module.exports = {
  httpsPromisify: httpsPromisify
}
