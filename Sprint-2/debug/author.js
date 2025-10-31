// Predict and explain first...
// The for...of loop is used to iterate over iterable objects like arrays or strings.
// However, author is a plain object, which is not iterable by default.
// Therefore, using for...of directly on an object will result in a TypeError.
// To iterate over the values of an object, we can use Object.values(), Object.keys(), or a for...in loop.  

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for (const value of Object.values(author)) {
//   console.log(value);
// }

for (const key in author) {
  console.log(author[key]);
}