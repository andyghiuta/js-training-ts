// ## setTimeout
// allows us to run a function once after the interval of time.
const pad0 = (nr: number) => (nr < 10 ? `0${nr}` : nr);
const getTime = () => {
  const date = new Date();
  return `${pad0(date.getMinutes())}:${pad0(date.getSeconds())}.${date.getMilliseconds()}`;
};

const fnToRun = () => {
  console.log(getTime(), 'ran');
};
const interval = 5 * 1000; // miliseconds = seconds times 1000

console.log(getTime(), 'run');
setTimeout(fnToRun, interval);
// running with interval 0 is NOT runnning at the exact moment it gets called,
// is run only after the current call stack empties.
// see: https://youtu.be/8aGhZQkoFbQ?t=301
console.log(getTime(), 'before');
setTimeout(fnToRun, 0);
console.log(getTime(), 'after');

// can be canceled with clearTimeout
const timer = setTimeout(fnToRun, 0);
// in NodeJS this is an object, in browser, it will be a number
console.log(timer);
clearTimeout(timer);
console.log(timer);

// ## setInterval
// allows us to run a function repeatedly, starting after the interval of time,
// then repeating continuously at that interval.
console.log(getTime(), 'before setInterval');
const intervalTimer = setInterval(fnToRun, 1000);

setTimeout(() => {
  console.log(getTime(), 'canceling setInterval');
  clearInterval(intervalTimer);
}, 5 * 1000);
