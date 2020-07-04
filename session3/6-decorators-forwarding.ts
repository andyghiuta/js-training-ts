//  ## Decorators
// do something extra when a function gets called
const pad0 = (nr: number) => (nr < 10 ? `0${nr}` : nr);
const getTime = () => {
  const date = new Date();
  return `${pad0(date.getMinutes())}:${pad0(date.getSeconds())}.${date.getMilliseconds()}`;
};

const loggerDecorator = (fn: Function) => (...args: any[]) => {
  console.log(getTime());
  return fn(...args);
};

const log = loggerDecorator(console.log);

log('Test 1');
log('Test 2');

const fnToRun = () => {
  log('ran');
};

const setTimeoutWithLog = loggerDecorator(setTimeout);

setTimeoutWithLog(fnToRun, 1000);

// ## Execution context
type UserWithAddress = {
  name: string;
  age: number;
  isAdmin?: boolean;
  address?: {
    city: string;
    street?: {
      name: string;
      nr?: number;
    },
  }
  getFullAddress?: Function;
  getAgeInYears?: Function;
};

const getFullAddress = function getFullAddress() {
  return `${this.address.city}, ${this.address.street.name} ${this.address.street.nr}`;
};
const getAgeInYears = function getAgeInYears(afterYears: number) {
  return this.age + afterYears;
};

const mia: UserWithAddress = {
  name: 'Mia',
  age: 22,
  address: {
    city: 'Iasi',
    street: {
      name: 'Palas',
      nr: 5,
    },
  },
  getFullAddress,
};

const john: UserWithAddress = {
  name: 'John',
  age: 30,
  address: {
    city: 'Iasi',
    street: {
      name: 'Palat',
      nr: 1,
    },
  },
  getFullAddress,
};
console.log(mia.getFullAddress());
console.log(john.getFullAddress());
// what if we have an object that doesn't have the method(s)
const mark: UserWithAddress = {
  name: 'Mark',
  age: 20,
  address: {
    city: 'Bacau',
    street: {
      name: 'Stefan cel Mare',
      nr: 10,
    },
  },
};
// console.log(mark.getFullAddress()); // error
// console.log(mark.getAgeInYears()); // error
// call with context:
console.log(getFullAddress.call(mark));
console.log(getAgeInYears.call(mark)); // NaN - because parameter was not passed
console.log(getAgeInYears.call(mark, 5)); // Ok

// alternatives: apply, bind
console.log(getAgeInYears.apply(mark, [5])); // Ok

const boundAgeInYears = getAgeInYears.bind(mark);

console.log(boundAgeInYears(2));
console.log(boundAgeInYears(5));
console.log(boundAgeInYears(10));

// default context is the global object
// @ts-ignore
global.age = 2;
console.log(getAgeInYears(2));
// equivalent to
console.log(getAgeInYears.call(global, 2));

// or in browser:
// window.age = 2;
// console.log(getAgeInYears(2));
// // equivalent to
// console.log(getAgeInYears.call(window, 2));
// console.log(getAgeInYears.call(this, 2));
