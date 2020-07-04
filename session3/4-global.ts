// ## Global object
// The global object provides variables and functions that are available anywhere.
//  By default, those that are built into the language or the environment.

// In a browser it is named window, for Node.js it is global,
// for other environments it may have another name.

//   Recently, globalThis was added to the language, as a standardized name for a global object,
// that should be supported across all environments.
// In some browsers, namely non - Chromium Edge, globalThis is not yet supported,
// but can be easily polyfilled.
console.log('Hello');
// is the same as the following in Node:
global.console.log('Hello');
// or same as the following in browser:
// window.console.log('Hello');

// make current user information global, to let all scripts access it
window.currentUser = {
  name: 'John',
};

// somewhere else in code
console.log(currentUser.name); // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
console.log(window.currentUser.name); // John
