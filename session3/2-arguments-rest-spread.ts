/* eslint-disable prefer-rest-params */
// ## The “arguments” variable
// There is a special array - like object named arguments that contains all arguments by their index

// For instance:

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
// @ts-ignore
showName('Julius', 'Caesar');

// shows: 1, Ilya, undefined (no second argument)
// @ts-ignore
showName('Ilya');

// Arrow functions do not have "arguments"
function f() {
  const showArg = () => console.log(arguments[0]);
  showArg();
}

// @ts-ignore
f(1); // 1

// ## Rest syntax: ...
const showName2 = (...parts: string[]) => {
  console.log(parts.length);
  console.log(parts[0]);
  console.log(parts[1]);
};

// shows: 2, Julius, Caesar
// @ts-ignore
showName2('Julius', 'Caesar');

// shows: 1, Ilya, undefined (no second argument)
// @ts-ignore
showName2('Ilya');

function showNameWithTitles(firstName: string, lastName: string, ...titles: string[]) {
  console.log(`${firstName} ${lastName}`); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showNameWithTitles('Julius', 'Caesar', 'Consul', 'Imperator');

// ## Spread syntax: ...

// "inverse" of the spread
const listOfNrs: number[] = [3, 5, 1];

console.log(Math.max(listOfNrs[0], listOfNrs[1], listOfNrs[2])); // 5
// @ts-ignore
console.log(Math.max(listOfNrs)); // Error in TS or in JS: NaN
console.log(Math.max(...listOfNrs)); // 5

// combining arrays
const arr1 = [1, -2, 3, 4];
const arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8

// making a copy of an array/object

const listOfNrsCopy = [...listOfNrs]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(listOfNrs) === JSON.stringify(listOfNrsCopy)); // true

// are the arrays equal?
console.log(listOfNrs === listOfNrsCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
listOfNrs.push(4);
console.log(listOfNrs); // 3, 5, 1, 4
console.log(listOfNrsCopy); // 3, 5, 1

const obj: Record<string, number> = { a: 1, b: 2, c: 3 };
const objCopy = { ...obj }; // spread the object into a list of parameters
// then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// Remember: deep nested objects aren't cloned "properly" with spread (Session1 -> 1-objects.ts)
