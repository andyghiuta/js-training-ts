/* eslint-disable no-extend-native */
/* eslint-disable no-proto */
(() => {
  const obj = {};
  console.log(`${obj}`); // "[object Object]" ?
  // @ts-ignore
  console.log(obj.__proto__ === Object.prototype); // true
  // @ts-ignore
  console.log(obj.__proto__.__proto__); // null

  const arr = [1, 2, 3];

  // it inherits from Array.prototype
  // @ts-ignore
  console.log(arr.__proto__ === Array.prototype); // true

  // then from Object.prototype
  // @ts-ignore
  console.log(arr.__proto__.__proto__ === Object.prototype); // true

  // and null on the top.
  // @ts-ignore
  console.log(arr.__proto__.__proto__.__proto__); // null

  function f() { }

  // @ts-ignore
  console.log(f.__proto__ === Function.prototype); // true
  // @ts-ignore
  console.log(f.__proto__.__proto__ === Object.prototype); // true, inherit from objects

  // Extending native objects

  // @ts-ignore
  String.prototype.show = function show() {
    console.log(`${this}`);
  };
  // @ts-ignore
  'BOOM!'.show(); // BOOM!
})();
