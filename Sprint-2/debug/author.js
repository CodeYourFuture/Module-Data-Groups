// // Predict and explain first...
// you're trying to iterate over the properties of the author object. 
// In JavaScript, the for...of loop is used for iterating over iterable objects, such as arrays, strings, maps,
// it will log  an error.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the probleml

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
