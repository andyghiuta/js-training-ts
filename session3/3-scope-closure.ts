// ## Variable scope

// Code blocks
{
  // do some job with local variables that should not be seen outside

  const message = 'Hello'; // only visible in this block

  console.log(message); // Hello
}

console.log(message); // Error: message is not defined

// if, for, while and so on, each have a block so the above applies
for (let i = 0; i < 3; i += 1) {
  // the variable i is only visible inside this for
  console.log(i); // 0, then 1, then 2
}

console.log(i); // Error, no such variable

// Closure / "Outer" scope
function sayHiBye(firstName: string, lastName: string) {
  let count = 0;
  // helper nested function to use below
  function getFullName() {
    // This is basically a closure
    // a function that remembers it's outer variables and can access them
    count += 1;
    console.log(`Called ${count} times`);
    return `${firstName} ${lastName}`;
  }

  console.log(`Hello, ${getFullName()}`);
  console.log(`Bye, ${getFullName()}`);
}
sayHiBye('Andy', 'G.');

// ## Lexical Environment
// Very nice explanation here: https://javascript.info/closure#lexical-environment
