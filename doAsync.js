module.exports = function ({ toRet, timeout }) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(`to resolve ${toRet}`)
      resolve(toRet)
    }, timeout)
  })
}
