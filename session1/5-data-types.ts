/*
 * There are 8 basic data types in JavaScript.
  PRIMITIVES:
  - number: for numbers of any kind: integer or floating-point,
      integers are limited by ±253.
  - bigint: is for integer numbers of arbitrary length. (ES2020)
  - string: for strings. A string may have zero or more characters,
      there’s no separate single-character type.
  - boolean: for true/false.
  - null: for unknown values – a standalone type that has a single value null.
  - undefined: for unassigned values – a standalone type that has a single value undefined.
  - symbol: for unique identifiers.

  - object: for more complex data structures.
 */

// Number
let someNumber: number = 1;
someNumber = 1.23;

// BigInt
const A_BIG_NUMBER = 123n;

// String
let someString: string = 'String with quotes';
someString = `Some string with embedded variables: ${someNumber}`;

// Boolean
const IS_NEW = true;
const isGreaterThan4 = 5 > 4;

// null
const hasNullValue = null;
let hasStringValue: string = null;
hasStringValue = 'someting';
let hasNumberValue: number = null;
hasNumberValue = 1;

// undefined
let hasNoValue: string;

console.log(typeof someNumber);
console.log(typeof A_BIG_NUMBER);
console.log(typeof IS_NEW);
console.log(typeof isGreaterThan4);
console.log(typeof hasNullValue);
console.log(typeof hasStringValue);
console.log(typeof hasNumberValue);
console.log(typeof hasNoValue);
