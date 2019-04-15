/**
output:

after main
to resolve hello
to resolve world
to resolve foo
after doAsync

*/
const doAsync = require('./doAsync')

async function main () {
  doAsync({ toRet: 'hello', timeout: 100 })
  doAsync({ toRet: 'world', timeout: 100 })
  await doAsync({ toRet: 'foo', timeout: 100 })
  console.log('after doAsync')
}

main()
console.log('after main')


