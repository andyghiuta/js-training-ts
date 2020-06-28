/* eslint-disable no-continue */
console.log('while');
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log(i);
  i += 1;
}

console.log('do..while');
i = 0;
do {
  console.log(i);
  i += 1;
} while (i < 3); // shows 0, then 1, then 2

console.log('for');
for (i = 0; i < 3; i += 1) { // shows 0, then 1, then 2
  console.log(i);
}
// skipping parts
i = 0;
for (; i < 3;) { // shows 0, then 1, then 2
  console.log(i);
  i += 1;
}

// breaking the loop
console.log('Breaking');
for (i = 0; i < 4; i += 1) { // shows 0, then 1 and stops when reaching 2
  if (i === 2) {
    break;
  }
  console.log(i);
}
// skipping to next value
console.log('Skipping');
for (i = 0; i < 3; i += 1) { // shows 0, skips 1, shows 2
  if (i === 1) {
    continue;
  }
  console.log(i);
}
