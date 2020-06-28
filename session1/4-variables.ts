// A variable is a “named storage” for data.
// We can use variables to store anything

// create (declare) a variable with "let"
let message;

// variables don't have types (in JS)
// you put anything in it
message = 'Hello, JavaScript';
message = 25; // change the value

console.log(message);

// let message = 'another'; // cannot declare twice

// declare a variable, giving it a type
// only possible in TypeScript
// if not defined, by default it's type is "any"
let typedMessage : string;
typedMessage = 'Hello 1, TypeScript';
// can be changed to another value of the same type
typedMessage = 'Hello 2, TypeScript';
// try to change it's type
// typedMessage = 25;

console.log(typedMessage);

// Constants

const MY_AGE = 33;

// MY_AGE = 34;
console.log(MY_AGE);

// "var" keyword
// used to be used, not so much anymore
// var messageVar = '1';
// var messageVar = '2';
