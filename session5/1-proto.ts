/* eslint-disable no-proto */
type Animal = {
  eats?: boolean;
  walk?: Function;
  sleep?: Function;
};

type Rabbit = Animal & {
  jumps: boolean;
};

const animal: Animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  },
  sleep() {
    this.isSleeping = true;
  },
};
const rabbit: Rabbit = {
  jumps: true,
};

// @ts-ignore
rabbit.__proto__ = animal;

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (read from "animal")
console.log(rabbit.jumps); // true

// Object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
// eslint-disable-next-line no-restricted-syntax
for (const prop in rabbit) {
  // if (Object.prototype.hasOwnProperty.call(rabbit, prop)) {
  console.log(prop); // jumps, eats, walk, sleep
  // }
}

rabbit.walk = () => {
  console.log('Rabbit! Bounce-bounce!');
};

animal.walk();
rabbit.walk(); // overwritten

rabbit.sleep();
