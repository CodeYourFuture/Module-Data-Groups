// Predict and explain first...
// this code will give an error because the for...of is generally used to iterate over iterable objects like arrays or strings. thus, we should use for...in loop to iterate over the properties of an object.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(`${value}: ${author[value]}`);
};