/* eslint-disable no-loop-func */
/*
  At first glance, what do you expect the following code to output?
  If the result after running the code is different,
  what should be changed to output the desired result?
 */

function showNumbers() {
  let i = 0;
  for (; i < 5; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

showNumbers();
