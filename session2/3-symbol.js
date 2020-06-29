/* eslint-disable eqeqeq */
// By specification, object property keys may be either of string type, or of symbol type.
// Not numbers, not booleans, only strings or symbols, these two types.

// A “symbol” represents a unique identifier.

// A value of this type can be created using Symbol():

// id is a new symbol
const id = Symbol('pk');

// Symbols are guaranteed to be unique.
// Even if we create many symbols with the same description, they are different values.
// The description is just a label that doesn’t affect anything.
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 == id2); // false

// console.log(`${id}`); // TypeError: Cannot convert a Symbol value to a string
console.log(`${id.toString()}`); // Symbol(pk)

const user = {
  name: 'John',
  age: 30,
  [id]: 123,
};

for (const key in user) {
  console.log(key); // name, age (no symbols)
}

// the direct access by the symbol works
console.log(`Direct: ${user[id]}`);

let clone = { ...user };

console.log(clone[id]); // 123

// ! JSON doesn't preserve Symbol properties
const jsonString = JSON.stringify(user);
clone = JSON.parse(jsonString);

console.log(jsonString, clone);
