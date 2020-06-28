/* eslint-disable strict */
/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable no-shadow */

'use strict';

// ## Functions
let outerVariable = 'Everyone';
// declaration;
function showMessage() {
  const innerVariable = `Hello ${outerVariable}!`;
  console.log(innerVariable);
}
// invocation (call) by name, adding "()"
showMessage();

function showMyMessage() {
  outerVariable = 'Nobody'; // ! Side effect: hanges outer variable

  const innerVariable = `Hello ${outerVariable}!`;
  console.log(innerVariable);
}

showMyMessage();

function showMyOtherMessage() {
  const outerVariable = 'Nobody'; // ! local variable, will no longer see the outer one

  const innerVariable = `Hello ${outerVariable}!`;
  console.log(innerVariable);
}

showMyOtherMessage();

// Parameters
function showCustomMessage(message: string) {
  const innerVariable = `Hello ${message}!`;
  console.log(innerVariable);
}

showCustomMessage(message);

// default values
function increment(operand1: number, operand2: number = 1) {
  console.log(operand1 + operand2);
}

increment(2);
increment(2, 2);
increment(2, 2, 4); // doesn't do anything with the 3rd parameter

// Returning a value
// Functions ALWAYS return something, if not specified is "undefined"

function decrement(operand1: number, operand2: number = 1): number {
  return operand1 - operand2;
}
const decremented = decrement(2);
console.log(decremented);

function checkAge(age: number) {
  return age >= 18; // 18 or older are allowed
}

function showMovie(age: number) {
  if (!checkAge(age)) {
    console.log('To yound to see this!');
    return; // return early, do not continue with the rest of the code
  }
  console.log('Showing you the movie');
  // other logic for grabbing the movie
}

showMovie(10);
showMovie(20);

// ## Function expressions:
sayHi();
function sayHi() {
  console.log('Hi!');
}
sayHiExpr();
const sayHiExpr = function () {
  console.log('Hi!');
};

// Why/Which?

const myAge = 16; // take 16 as an example

if (myAge < 18) {
  welcome(); //               \   (runs)
  //                          |
  function welcome() { //     |
    console.log('Hello!'); // |  Function Declaration is available
  } //                        |  everywhere in the block where it's declared
  //                          |
  welcome(); //               /   (runs)
} else {
  function welcome() {
    console.log('Greetings!');
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

let welcomeExpr;
if (age < 18) {
  welcomeExpr = function () {
    console.log('Hello!');
  };
} else {
  welcomeExpr = function () {
    console.log('Greetings!');
  };
}

welcomeExpr(); // ok now

// ## Arrow functions
// let func = (arg1, arg2, ...argN) => expression

const sum = (a: number, b: number) => a + b; // implicit return

const sub = (a: number, b: number) => { // the curly brace opens a multiline function
  const result = a - b;
  return result; // if we use curly braces, then we need an explicit "return"
};

// There's more ... we'll revisit
