// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key in author) {
  console.log(author[key]);
}

//TypeError: author is not iterable
// The for...of loop only works on iterable objects in JavaScript—such as Arrays, Strings, Sets, and Maps.
// Plain JavaScript objects ({}) are not iterable by default because they don't have a built-in [Symbol.iterator] method.
// use a for...in loop to step through the keys, then access each value using bracket notation
