// Predict and explain first...
// it will give error as it is not iterable object(author)
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

/* it will not work as objects in javascript are not iterable using a for...of loop.This loop
works with iterable objects like arrays string and map.so this is plain object which is not iterable so it will give error.*/

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {// use for ...in to iterate keys and access values
  console.log(author[value]);
}
