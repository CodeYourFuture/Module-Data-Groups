// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// The code is trying to iterate over the properties of the author object using a for...of loop, which is not correct for objects in JavaScript.
// In JavaScript, objects are not iterable with for...of loops. Instead, we can use a for...in loop to iterate over the property names of the object, and then access the corresponding values.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(value);
}
