// https://javascript.info/data-types

// ## Arrays
let arr;
// eslint-disable-next-line @typescript-eslint/no-array-constructor
arr = new Array();
arr = []; // preffered

console.log(arr, typeof arr);

// with types
const arrTyped: any[] = [1, '2', true, {}];

console.log(arrTyped);

let numbersOrStrings: (number | string)[] = [1, '2'/* , true */];

type NumberOrString = number | string;
// array of array (matrix)
const numbersOrStrings2: NumberOrString[][] = [[1, '2']];

console.log(numbersOrStrings, numbersOrStrings2);

// ## Useful array methods
// slice, splice, concat, push, pop, shift, unshift, indexOf, includes, forEach

// # .sort(fn?)

function compare(a: NumberOrString, b: NumberOrString) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a < b) return -1; // if the first value is less than the second
  return 0; // if values are equal
}
numbersOrStrings = [2, 15, 1, 2, 7, 'test1', 'test2', 'test10'];

numbersOrStrings.sort(); //
console.log(numbersOrStrings); // 1, 15, 2, 2, 7, 'test1', 'test10', 'test2'

numbersOrStrings.sort(compare);
console.log(numbersOrStrings); // 1, 2, 2, 7, 15, 'test1', 'test10', 'test2'

// a better sort algorigthm
const comparator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

numbersOrStrings.sort(comparator.compare);
console.log(numbersOrStrings); // 1, 2, 2, 7, 15, 'test1', 'test2', 'test10'

// # find / findIndex
const result = arr.find((item, index, array) => {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
// get first item  bigger than 10
const biggerThan10 = numbersOrStrings.find((v) => v > 10);
console.log(biggerThan10); // 15

// # filter
let resultArray = arr.filter((item, index, array) => {
  // if true is returned, item is returned added to the result array
  // for falsy scenario item is skipped
});

const allLowerThan10 = numbersOrStrings.filter((a) => a < 10);
console.log(allLowerThan10); // [ 1, 2, 2, 7 ]

// # map
resultArray = arr.map((item, index, array) => {
  // returns the new value instead of item
});

console.log(numbersOrStrings.map((v) => parseInt(`${v}`, 10)));
// => [1, 2, 2, 7, 15, NaN, NaN, NaN]

// # reduce
// const value = arr.reduce((accumulator, item, index, array) => {
//   // ...
// }, initial);

const initial: {
  strings: string[];
  numbers: number[];
} = {
  strings: [],
  numbers: [],
};

const resultObj = numbersOrStrings.reduce((accumulator, item) => {
  if (typeof item === 'string') {
    accumulator.strings.push(item);
  } else {
    accumulator.numbers.push(item);
  }
  return accumulator;
}, initial);
console.log(resultObj);
/* =>
{
  strings: [ 'test1', 'test2', 'test10' ],
  numbers: [ 1, 2, 2, 7, 15 ]
}
*/
