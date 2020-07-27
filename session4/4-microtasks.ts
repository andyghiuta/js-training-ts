/*
Promise handlers .then/.catch/.finally are always asynchronous.

Even when a Promise is immediately resolved, the code on the lines below
  .then/.catch/.finally will still execute before these handlers.
*/
const promise = Promise.resolve();

promise.then(() => console.log('promise done!'));

console.log('code finished'); // this message shows first

// order the messages
Promise.resolve()
  .then(() => console.log('promise done!'))
  .then(() => console.log('code finished'));

// Unhandled rejection
// An "unhandled rejection" occurs when a promise error is
//  not handled at the end of the microtask queue.
process.on('unhandledRejection', (reason, unhandledPromise) => {
  console.log('Unhandled Rejection at:', unhandledPromise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});
const promiseHandled = Promise.reject(new Error('Promise Failed and caught!'));
// promiseHandled.catch(console.log);
