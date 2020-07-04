// # Recursion and stack

// When a function solves a task, in the process it can call many other functions.
// A partial case of this is when a function calls itself. That’s called recursion.

// Iterative
function pow(x: number, n: number) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

// Recursive
// Max recursion depth is 10.000
function powR(x: number, n: number): number {
  console.trace();
  if (n === 1) {
    return x; // exit condition
  } else {
    return x * powR(x, n - 1); // next iteration
  }
}

console.log(powR(2, 3)); // 8
