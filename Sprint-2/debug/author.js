// Predict and explain first...
// In this code, we are trying to iterate over the values of an object using " for ... of loop".
// However, the `for ... of` loop is designed to iterate over iterable objects like arrays, not objects.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for this code we use `for ... in` loop method whenever we want to loop though an object.
// The `for ... in` loop iterates through properties in the prototype chain.
// This means that we need to check if the property belongs to the object using hasownproperty whenever we loop through an object with the `for ... in` loop.

for (const key in author) {
 // if (author.hasOwnProperty(key)) {
    console.log(`${key}: ${author[key]}`);
  }
//}

//for (const value of author) {
// console.log(value);
//}
