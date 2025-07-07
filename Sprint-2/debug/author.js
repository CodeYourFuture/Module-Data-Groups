// Predict and explain first...
//author is a plain object, and JavaScript's for...of loop only works with iterable data types (like arrays, strings, etc.). Plain objects aren’t iterable
// we use Object.values(obj) to get property of values
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}
