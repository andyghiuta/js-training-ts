// ## Code structure
// Statements:
console.log('This is a statement');
console.log('This is another statement');

// ## Semicolons:
// In most cases, a newline implies a semicolon.
// But “in most cases” does not mean "always"!
console.log('String'
  + 'is concatenated');
// Gotchas

// before "[]":
// console.log('There will be an error')

//   [1, 2].forEach(console.log);
// after "return":
// function a() {
//   return 'Return'
//   + 'value';
// }

// ## Comments
// This comment occupies a line of its own
console.log('Hello');

console.log('World'); // This comment follows the statement

/* An example with two messages.
This is a multiline comment.
*/
console.log('Hello');
console.log('World');
// /*
//   /* nested comment ?!? */
// * /
