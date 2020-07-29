(() => {
  const animal = {
    eats: true,
  };

  // create a new object with animal as a prototype
  const rabbit = Object.create(animal);

  console.log(rabbit.eats); // true

  console.log(Object.getPrototypeOf(rabbit) === animal); // true

  Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

  console.log(rabbit.eats); // undefined
})();
