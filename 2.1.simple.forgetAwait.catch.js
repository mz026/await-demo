/**
output:

after doAsync
after wrapper
after main
(node:40487) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): throw in async
(node:40487) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

if we forget to `await`, the promise rejection won't be catched by the wrapping async function

*/

const doAsync = require('./doAsync')

async function main() {
  doAsync({ toRet: 'hello', timeout: 100, toThrow: true })
  console.log('after doAsync')
}

async function wrapper () {
  try {
    await main()
    console.log('after main')
  } catch (e) {
    console.log('gotcha!')
    console.log(e)
  }
}

wrapper()
console.log('after wrapper')
