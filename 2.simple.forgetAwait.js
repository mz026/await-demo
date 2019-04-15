/**
output:

after doAsync
after main
to resolve hello

program exists AFTER the promise is resolved

*/

const doAsync = require('./doAsync')

async function main() {
  doAsync({ toRet: 'hello', timeout: 100 })
  console.log('after doAsync')
}

main()
console.log('after main')
