// Predict and explain first...
// Because for...of only works on iterable objects like arrays, not plain objects
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
const objValues = Object.values(author);

for (const oValues of objValues) console.log(oValues);

// OR

console.log(author.firstName); /// And others field
