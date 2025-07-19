// Predict and explain first...
// Author is a plain object, and for loop only works for iterable arrays.
//To iterate over an object, we can use for..in loop, to access the values.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

/*for (const value of author) {
  console.log(value);
}*/

/******** Fixing the problem **********/

for (const key in author) {
  console.log(author[key]);
}
