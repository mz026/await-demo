module.exports = function ({ toRet, timeout, toThrow = false }) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if (toThrow) {
        reject('throw in async')
      } else {
        console.log(`to resolve ${toRet}`)
        resolve(toRet)
      }
    }, timeout)
  })
}
