/**

after main
to resolve hello
after doAsync

*/
const doAsync = require('./doAsync')

async function main () {
  await doAsync({ toRet: 'hello', timeout: 100 })
  console.log('after doAsync')
}

main()
console.log('after main')
