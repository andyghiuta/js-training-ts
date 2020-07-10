function promisify() {
  function retrieveResult(callback: Function) {
    console.log('retrieveResult');
    // simulate an http call
    setTimeout(() => {
      console.log('build the result');
      const myResult = Math.random() < 0.5 ? 'Success!' : 'Error!';
      callback(myResult);
    }, 5 * 1000);
  }

  function promisifiedRetrieve() {
    return new Promise((resolve, reject) => {
      retrieveResult((result: string) => {
        if (result === 'Success!') {
          resolve(result);
        } else {
          reject(result);
        }
      });
    });
  }

  // non promise approach
  retrieveResult((result: string) => {
    if (result === 'Success!') {
      console.log(`Succesfully retrieved result: ${result}`);
    } else {
      console.log(`Error retrieving result: ${result}`);
    }
  });
  retrieveResult((result: string) => {
    if (result === 'Success!') {
      console.log(`Succesfully retrieved result: ${result}`);
    } else {
      console.log(`Error retrieving result: ${result}`);
    }
  });
  retrieveResult((result: string) => {
    if (result === 'Success!') {
      console.log(`Succesfully retrieved result: ${result}`);
    } else {
      console.log(`Error retrieving result: ${result}`);
    }
  });

  // promisified
  promisifiedRetrieve()
    .then((resultSuccess) => {
      console.log(`Succesfully retrieved result: ${resultSuccess}`);
    })
    .catch((resultError) => {
      console.log(`Error retrieving result: ${resultError}`);
    });
  promisifiedRetrieve()
    .then((resultSuccess) => {
      console.log(`Succesfully retrieved result: ${resultSuccess}`);
    })
    .catch((resultError) => {
      console.log(`Error retrieving result: ${resultError}`);
    });
  promisifiedRetrieve()
    .then((resultSuccess) => {
      console.log(`Succesfully retrieved result: ${resultSuccess}`);
    })
    .catch((resultError) => {
      console.log(`Error retrieving result: ${resultError}`);
    });
}

promisify();
