// https://javascript.info/object-toprimitive

const user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint === 'string' ? `{name: "${this.name}"}` : this.money;
  },

  // for hint="string", if toPrimitive doesn't exist
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default", if toPrimitive doesn't exist
  valueOf() {
    return this.money;
  },
};

// conversions demo:
console.log(`${user}`); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
