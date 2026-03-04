// Predict and explain first...

// Prediction: This code will throw an error.
// The error happens because "author is an object and objects are not iterable.
// The "for...of" loop only works with iterable objects like arrays or strings
// So the program will throw a type error

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
