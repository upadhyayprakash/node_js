console.log('first');
/**
 * Push to 'promise' queue
 */
// Promise.resolve().then(() => {
//     console.log('this is promise 1');
// })

/**
 * Push to 'nextTick()' queue
 */
// process.nextTick(() => {
//     console.log('this is process.nextTick 1');
// })
console.log('second');