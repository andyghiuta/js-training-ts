/* eslint-disable operator-assignment */
/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable no-useless-concat */

// Operand: what operators are applied to. For instance, in the multiplication of 5 * 2
//          there are two operands: the left operand is 5 and the right operand is 2
// Unary:   Operator that has only 1 operand
// Binary:  Operator that has 2 operands

// ## Math: +, -, *, /, %, **
console.log(1 + 2, 1 - 2, 1 * 2, 1 / 2, 5 % 4, 2 ** 4);
let myNr = 2;
// in place (same variable):
myNr = myNr * 2;
// <=>
myNr *= 2;
console.log(myNr);

// increment:
console.log(myNr++); // postfix
console.log(++myNr); // prefix
// decrement
console.log(myNr--);
console.log(--myNr);

// ## String: + => Concatenation
console.log('Java' + 'Script'); // JavaScript
console.log('1' + '2'); // ?
console.log(1 + 2 + '3'); // ?
console.log('1' + 2 + 3); // ?

// ## Asigment: =
const a = 'A';

// ## Bitwise:
//    AND( & )
//    OR( | )
//    XOR( ^ )
//    NOT( ~ )
//    LEFT SHIFT( << )
//    RIGHT SHIFT( >> )
//    ZERO - FILL RIGHT SHIFT( >>> )
console.log(0 & 0, 1 & 1, 1 & 0, 0 & 1);
console.log(0 | 0, 1 | 1, 1 | 0, 0 | 1);
console.log(0 ^ 0, 1 ^ 1, 1 ^ 0, 0 ^ 1);
console.log(~0, ~1);
console.log(2 << 2); // 0010 => 1000
console.log(2 >> 2); // 0010 => 0000

// ## Logical operators:
//    AND (&&)
//    OR (||)
//    NOT (!)
console.log(true && false, true && true);
console.log(true || false, true || true);
console.log(!true, !false);
