/*
  Given the following "library"

  1. Fix the usage of it so that the validate password function
    is outputing the messages containing the user name
  2. Fix the usage so it validates the max failed login attempts correctly

  Note: the library itself "cannot" be changed
*/

const passwordLib = {
  validate(
    suppliedPassword: string,
    checkPassword: string,
    ok: Function,
    fail: Function,
    isAccountBlocked: Function = undefined,
  ) {
    if (typeof isAccountBlocked !== 'undefined' && isAccountBlocked()) {
      // nothing to do here
    } else if (suppliedPassword === checkPassword) {
      ok();
    } else {
      fail();
    }
  },

  loginOk() {
    console.log(`${this.name} logged in`);
  },
  loginFail() {
    console.log(`${this.name} failed to log in`);
    this.failAttempts += 1;
  },
  isAccountBlocked() {
    if (this.failAttempts >= 3) {
      console.log(`${this.name} is blocked`);
      return true;
    }
    return false;
  },
};

function runValidation() {
  const user1 = {
    name: 'John',
    password: 'hunter2',
    failAttempts: 0,
  };

  const user2 = {
    name: 'Anna',
    password: 'test1234',
    failAttempts: 0,
  };

  passwordLib.validate('hunter', user1.password, passwordLib.loginOk, passwordLib.loginFail);
  passwordLib.validate('hunter2', user1.password, passwordLib.loginOk, passwordLib.loginFail);

  passwordLib.validate('hunter2', user2.password, passwordLib.loginOk, passwordLib.loginFail, passwordLib.isAccountBlocked);
  passwordLib.validate('hunter2', user2.password, passwordLib.loginOk, passwordLib.loginFail, passwordLib.isAccountBlocked);
  passwordLib.validate('hunter2', user2.password, passwordLib.loginOk, passwordLib.loginFail, passwordLib.isAccountBlocked);
  // should not allow login after 3 failed attempts
  passwordLib.validate('hunter2', user2.password, passwordLib.loginOk, passwordLib.loginFail, passwordLib.isAccountBlocked);
  passwordLib.validate('test1234', user2.password, passwordLib.loginOk, passwordLib.loginFail, passwordLib.isAccountBlocked);
}

runValidation();
