// ## Nullish coalescing operator '??'

/*
The result of a ?? b is:

  a if it's not null or undefined,
  b, otherwise.
*/

// const x = a ?? 'default';
// Support: Browsers: Chrome 80+, Firefox 72; Node: 14

const rectangleArea = (width, height = null) => {
  const w = width;
  const h = height ?? width; // for a square, width == height

  console.log(`Area is: ${w * h}`);
};

console.log(rectangleArea(2, 3)); // 6
console.log(rectangleArea(2)); // 4
console.log(rectangleArea(2, 0)); // 0
