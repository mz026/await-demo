/**
output:

after main
to resolve hello
to resolve world
after doAsync
to resolve foo

*/
const doAsync = require('./doAsync')

async function main () {
  await doAsync({ toRet: 'hello', timeout: 100 })
  await doAsync({ toRet: 'world', timeout: 100 })
  doAsync({ toRet: 'foo', timeout: 100 })
  console.log('after doAsync')
}

main()
console.log('after main')

