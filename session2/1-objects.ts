/* eslint-disable func-names */
/* eslint-disable prefer-object-spread */
/* eslint-disable eqeqeq */
/* eslint-disable object-shorthand */
const user1 = new Object(); // "object constructor" syntax
const user2 = {}; // "object literal" syntax

const user3 = { //  an object
  name: 'John', //  by key "name" store value "John"
  age: 30, //       by key "age" store value 30
};

// get property values of the object:
console.log(user3.name, user3.age);

// set property
user3.age = 33;
// user3.isAdmin = false;

type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
  address?: {
    city: string;
    street?: {
      name: string;
      nr?: number;
    },
  }
};

const user4: User = {
  name: 'Mia',
  age: 22,
};

console.log(`${user4.name} is ${user4.age} old`);
user4.isAdmin = true;
console.log(user4.isAdmin);

// chaining deep properties
console.log(user4.address.city, user4.address.street.nr); // ?

// delete a property
delete user4.isAdmin;

// space/dash/variables in property name:
type Person = {
  [key: string]: string | boolean | number
};

const user5: Person = {
  'likes birds': true,
  'is-admin': false,
};
console.log(user5['is-admin']);
const key = 'first-name';
user5[key] = 'John';
user5.lastName = 'Snow';
console.log(user5);

// shorthand
const user6 = {
  age: 30,
  key,
};
// equivalent to:
const user7 = {
  age: 30,
  key: key,
};

console.log(user6.key);

for (const objKey in user5) {
  console.log(`${objKey} => ${user5[objKey]}`);
}

// ## Copying/reference
// Primitves are copied by value
const message = 'Hello!';
const phrase = message; // different variables, same value

// objects are copied by reference
const user8 = user6;
user8.age = 33;
console.log(user6.age); // 33 ?
console.log(user6 == user7); // false
console.log(user6 == user8, user6 === user8); // true true

// create a true copy

const clone: Person = {}; // the new empty object

// let's copy all user properties into it
for (const key in user7) {
  clone[key] = user7[key];
}

// now clone is a fully independent object with the same content
clone.age = 20; // changed the data in it

console.log(user7.age); // still 30 in the original object

// Alternatives:
const clone2 = Object.assign({}, user7);
const clone3 = JSON.parse(JSON.stringify(user7));
const clone4 = { ...user7 }; // destructuring, we'll talk more about it later
// various libs have "clone" functions that account for edge cases: lodash, ramda

// ## Garbage collection
// https://javascript.info/garbage-collection

// ## Methods, "this"
type ObjectWithMethods = {
  name: string;
  age: number;
  sayHi?: Function
  getAge?: Function
};

let methodsObj: ObjectWithMethods = {
  name: 'John',
  age: 30,
};

methodsObj.sayHi = function () {
  console.log('Hello!');
};
methodsObj.sayHi();

methodsObj = {
  ...methodsObj,
  sayHi: function () {
    console.log('Hello');
  },
  getAge() {
    console.log('Age is 30');
  },
};

// ## "this"
// used to access object properties from methods
methodsObj.sayHi = function () {
  console.log(`Hi, ${this.name}!`);
};
methodsObj.getAge = function () {
  return this.age;
};
console.log(`${methodsObj.name}'s age is ${methodsObj.getAge()}`);

// "this" is not bound, is given by the context of the execution
function sayHi() {
  console.log(this.name);
}
const methodsObj2: ObjectWithMethods = {
  name: 'Mia',
  age: 20,
};
methodsObj.sayHi = sayHi;
methodsObj2.sayHi = sayHi;

console.log(methodsObj.sayHi(), methodsObj2.sayHi(), sayHi());

// arrow functions have no "this"
// they inherit it from the context in which they are defined
methodsObj.sayHi = () => {
  console.log(this.name);
};

methodsObj.sayHi = function () {
  const formatName = () => `Hi, ${this.name}`;

  console.log(formatName());
};
