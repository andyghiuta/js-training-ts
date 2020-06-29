/*
 ## Constructor function

  Constructor functions technically are regular functions. There are two conventions though:

  They are named with capital letter first.
  They should be executed only with "new" operator.
*/
function User(name: string) {
  this.name = name;
  this.isAdmin = false;
}

const user = new User('Jack');

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// When a function is executed with new, it does the following steps:

//  - A new empty object is created and assigned to this.
//  - The function body executes.Usually it modifies this, adds new properties to it.
//  - The value of this is returned.

function User1(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this; (implicitly)
  // return { anotherProp: 'something' } // explicit return other object
}
