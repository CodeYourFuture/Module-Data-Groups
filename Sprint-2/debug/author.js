// Predict and explain first...

// Answer: for...of loop is designed to iterate over iterable objects (e.g., arrays, strings, Map, Set, etc.)

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for (const value of author) {
//   console.log(value);
// }

for (const value of Object.values(author)) {
  console.log(value);
}
