/*
  Promise - a special object that represents the eventual completion (or failure)
    of an asynchronous operation, and its resulting value.

  A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation completed successfully.
    rejected: meaning that the operation failed.
*/

function retrieveResult(callback: Function) {
  console.log('retrieveResult');
  // simulate an http call
  setTimeout(() => {
    console.log('build the result');
    const myResult = Math.random() < 0.5 ? 'Success!' : 'Error!';
    callback(myResult);
  }, 5 * 1000);
}

function promiseExample() {
  const promise = new Promise(((resolve, reject) => {
    // executor block - do some processing
    console.log('before retrieveResult');
    retrieveResult((result: string) => {
      console.log(`We got a result = ${result}`);
      if (result === 'Success!') {
        resolve(result);
      } else {
        reject(result);
      }
      console.log(promise);
    });
    console.log('after retrieveResult');
  }));

  console.log(promise);
  promise
    .then((positiveResponse) => {
      console.log(positiveResponse);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('One way or another, it has completed');
    });
}

promiseExample();
promiseExample();
promiseExample();

function delay(sec: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), sec * 1000);
  });
}

function promiseChaining() {
  console.log('Chaining');
  const promise = new Promise(((resolve) => {
    setTimeout(() => resolve(1), 1000); // (*)
  }));
  promise
    // .then((result: number) => { // (**)
    //   console.log(result); // 1
    //   return result * 2;
    // })
    .then((result: number) => { // (**)
      console.log(result); // 1
      return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
      });
    })
    .then((result: number) => { // (***)
      console.log(result); // 2
      return result * 2;
    })
    .then((result: number) => {
      console.log(result); // 4
      return result * 2;
    });
}

promiseChaining();

function promiseNotChaining() {
  console.log('Chaining');
  const promise = new Promise(((resolve) => {
    setTimeout(() => resolve(1), 1000); // (*)
  }));
  promise
    .then((result: number) => { // (**)
      console.log(result); // 1
      return result * 2;
    });
  promise
    .then((result: number) => { // (***)
      console.log(result); // 1
      return result * 2;
    });
  promise
    .then((result: number) => {
      console.log(result); // 1
      return result * 2;
    });
}

promiseNotChaining();

// Real example (browser), fetching details from github
fetch('https://api.github.com/users/andyghiuta')
  .then((response) => response.json())
  .then((githubUser) => {
    console.log(githubUser);
  });
