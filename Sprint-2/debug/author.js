// Predict and explain first...
// We cannot use for...of directly on a plain object because objects are not iterable.
// We can use for...of with Object.values(), Object.keys(), or Object.entries().
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

for (const value of Object.values(author)) {
  console.log(value);
}
