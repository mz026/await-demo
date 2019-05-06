const doAsync = require('./doAsync')
const timeouts = [1000, 2000, 3000]

// enter forEach wrapper
// enter timeout:  1000
// enter timeout:  2000
// enter timeout:  3000
// leave forEach wrapper
// wrapper resolved
// to resolve timeout-1000
// to resolve timeout-2000
// to resolve timeout-3000
async function forEach(timeouts, cb) {
  console.log('enter forEach wrapper')
  timeouts.forEach(async (timeout) => {
    console.log('enter timeout: ', timeout)
    await cb(timeout)
    // await doAsync({ timeout, toRet: `timeout-${timeout}` })
  })
  console.log('leave forEach wrapper')
}

// enter forloop wrapper
// to resolve timeout-1000
// to resolve timeout-2000
// to resolve timeout-3000
// leave forloop wrapper
// wrapper resolved
async function forLoop (timeouts, cb) {
  console.log('enter forloop wrapper')
  for (var i = 0; i < timeouts.length; i += 1) {
    await cb(timeouts[i])
  }
  console.log('leave forloop wrapper')
}

forEach(timeouts, async (timeout) => {
    await doAsync({ timeout, toRet: `timeout-${timeout}` })
  })
  .then(()=> { console.log('wrapper resolved') })


// forLoop(timeouts, async (timeout)=> {
//     await doAsync({ timeout: timeout, toRet: `timeout-${timeout}` })
//   })
//   .then(()=> { console.log('wrapper resolved') })
