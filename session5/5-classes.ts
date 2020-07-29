/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
(() => {
  class User {
    name: string = '';

    constructor(name: string) {
      this.name = name;
    }

    sayHi() {
      console.log(`Hi, ${this.name}!`);
    }
  }

  const user = new User('John');
  console.log(user.name); // John
  user.sayHi(); // Hi, John!
  //  class fields are set on individual objects, not User.prototype:
  console.log(User.prototype.name); // undefined

  // Inheritance
  class Animal {
    // "protected" in JS
    _name: string;
    // "protected" in TS
    // protected _name: string;

    private speed: number;

    // private & readonly
    readonly #legs: number;

    constructor(name: string) {
      this._name = name;
      this.speed = 0;
      this.#legs = 4;
    }

    run(speed: number) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
      // this.#legs = 2;
    }

    get name() {
      return this._name;
    }

    set name(name) {
      this._name = name;
    }
  }

  class Rabbit extends Animal {
    // private property
    #earLength: number;

    constructor(name: string, earLength: number) {
      // must call super nefore using this
      super(name);
      this.#earLength = earLength;
      // this.#legs = 5;
    }

    hide() {
      console.log(`${this.name} hides!`);
    }

    // overwriting
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }

  const rabbit = new Rabbit('White Rabbit', 10);

  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!
  rabbit.run(10); // White Rabbit runs with speed 10.
  rabbit.stop(); // White Rabbit hides!
})();
