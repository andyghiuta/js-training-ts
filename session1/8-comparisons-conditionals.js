/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
// Less/Greater: <,>
// Less or equal: <=
// Greater or equal: >=

// The result is always 'boolean'
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 2);
console.log(2 <= 2);
console.log('A' < 'B');

// When comparing values of different types, JavaScript converts the values to numbers.
console.log('1' < 2);

// Equal: == (2 =) or === (3 =)
// == => value comparison
let nr1 = 2;
const nr2 = '2';
console.log(nr1 == nr2); // true
console.log(0 == false); // true
console.log('' == false); // true
// === => value AND type comparison
console.log(nr1 === nr2); // false
console.log('' === false); // false

// TIP: Avoid comparing to null or undefined
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

nr1 = '2';
// ## Conditionals
if (nr1 === 2) {
  console.log('Variable is number 2!');
} else if (nr1 === '2') {
  console.log('Variable is string "2"!');
} else {
  console.log('What happened?');
}

// Conditional operator (ternary)
//    => let result = expresion ? truthValue : falseValue

const age = 18;
let accessAllowed;
// The following:
if (age >= 18) {
  accessAllowed = 'Allowed';
} else {
  accessAllowed = 'Forbidding';
}
// is equivalent to:
accessAllowed = age >= 18 ? 'Allowed' : 'Forbidden';
// result:
console.log(accessAllowed);

// ?: can be nested, but avoid doing so for readability
// EG:
let message = (age < 3) ? 'Hi, baby!'
  : (age < 18) ? 'Hello!'
    : (age < 100) ? 'Greetings!'
      : 'What an unusual age!';

// compare with:
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

console.log(message);

// ## Switch statement
const ageGroup = 'baby'; // one of: baby, junior, adult, senior

switch (ageGroup) {
  case 'baby':
    message = 'Hi, baby!';
    break;
  case 'junior':
    message = 'Hello!';
    break;
  case 'adult':
  case 'senior':
    // handle adults and seniors the smae
    message = 'Greetings!';
    break;
  default:
    message = 'What an unusual age!';
    break;
}
