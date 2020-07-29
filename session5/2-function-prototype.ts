(() => {
  type Animal = {
    eats?: boolean;
    jumps?: boolean;
  };

  const animal: Animal = {
    eats: true,
  };

  function Rabbit(name: string) {
    this.name = name;
  }

  Rabbit.prototype = animal;
  // @ts-ignore
  const rabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal

  console.log(rabbit.eats); // true

  // add properties to the prototype
  Rabbit.prototype.jumps = false;

  console.log(animal.jumps); // false
  console.log(rabbit.jumps); // false
  rabbit.jumps = true;
  console.log(animal.jumps); // false
  console.log(rabbit.jumps); // true
})();
