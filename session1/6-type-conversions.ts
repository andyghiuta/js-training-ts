// ## String
// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
const value = true;
console.log(typeof value); // boolean

const stringFromBool = String(value); // now value is a string "true"
console.log(typeof stringFromBool); // string

// ## Number
const str = '123';
console.log(typeof str); // string
const num = Number(str); // becomes a number 123
console.log(typeof num); // number

const age = Number('an arbitrary string instead of a number');

console.log(age); // NaN, conversion failed

// Rules:
console.log(Number('   123   ')); // 123
console.log(Number('123z')); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Normally, in JS Numeric conversion happens automatically
// in mathematical functions and expressions.
// TypeScript is smart enough to detect such things and prevent mistakes
// For example, when division / is applied to non - numbers:
// console.log('6' / '2'); // 3, strings are converted to numbers

// ## Boolean:

// Boolean conversion is the simplest one.
// It happens in logical operations but can also be performed
// explicitly with a call to Boolean(value).

// The conversion rule:
// Values that are intuitively “empty”,
//   like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean('hello')); // true
console.log(Boolean('')); // false
