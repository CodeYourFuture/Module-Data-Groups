// Predict and explain first...
// Prediction: The error is that it is trying to iterate over a non-array object.

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

// for iterating in an object for...in can be used
// and each iteration it returns the key
// then each value can be accessed using the key with bracket notation

