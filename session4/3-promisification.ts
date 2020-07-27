function promisify() {
  function retrieveResult(nr: number, callback: Function) {
    console.log(`${nr} -> retrieveResult`);
    // simulate an http call
    setTimeout(() => {
      // console.log(`${nr} -> build the result`);
      if (nr !== 3) {
        callback(null, `${nr} -> Success!`);
      } else {
        callback(`${nr} -> Error!`, null);
      }
    }, 5 * 1000);
  }

  function promisifiedRetrieve(nr: number) {
    return new Promise((resolve, reject) => {
      retrieveResult(nr, (resultError: string | null, resultSuccess: string | null) => {
        if (resultError) {
          reject(resultError);
        } else {
          resolve(resultSuccess);
        }
      });
    });
  }

  // non promise approach
  retrieveResult(1, (resultError: string | null, resultSuccess: string | null) => {
    if (resultSuccess) {
      console.log(`Succesfully retrieved result: ${resultSuccess}`);
      retrieveResult(2, (resultError2: string | null, resultSuccess2: string | null) => {
        if (resultSuccess2) {
          console.log(`Succesfully retrieved result: ${resultSuccess2}`);
          retrieveResult(3, (resultError3: string | null, resultSuccess3: string | null) => {
            if (resultSuccess3) {
              console.log(`Succesfully retrieved result: ${resultSuccess3}`);
            } else {
              console.log(`Error retrieving result: ${resultError3}`);
            }
          });
        } else {
          console.log(`Error retrieving result: ${resultError2}`);
        }
      });
    } else {
      console.log(`Error retrieving result: ${resultError}`);
    }
  });

  // promisified
  promisifiedRetrieve(1)
    .then((resultSuccess) => {
      console.log(`Succesfully retrieved result: ${resultSuccess}`);
      return promisifiedRetrieve(2);
    })
    .then((resultSuccess) => {
      console.log(`Succesfully retrieved result: ${resultSuccess}`);
      return promisifiedRetrieve(3);
    })
    .catch((resultError) => {
      console.log(`Error retrieving result: ${resultError}`);
    });
}

promisify();
