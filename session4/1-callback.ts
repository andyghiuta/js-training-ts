/*
  Callback - a function that is received as a parameter
    and gets executed at some point in the process (called back)
 */
function callbackExample() {
  function retrieveResult(callback: Function) {
    console.log('retrieveResult');
    // simulate an http call
    setTimeout(() => {
      console.log('build the result');
      const myResult = Math.random() < 0.5 ? 'Success!' : 'Error!';
      callback(myResult);
    }, 5 * 1000);
  }

  function showResult(callbackSuccess: Function, callbackError: Function) {
    console.log('before retrieveResult');
    retrieveResult((result: string) => {
      console.log(`We got a result = ${result}`);
      if (result === 'Success!') {
        callbackSuccess();
      } else {
        callbackError();
      }
    });
    console.log('after retrieveResult');
  }

  console.log('before showResult');
  showResult(() => {
    console.log('THE END - finished succesfully');
  }, () => {
    console.log('THE END - whoops. There was an error');
  });
  console.log('after showResult');
}

callbackExample();
callbackExample();
callbackExample();
