// Predict and explain first...
// Objects (author) are not iterable unless the iterable protocol is used. Also for...of cannot be used to iterate over the properties of an object.
// we have to use Object.keys or Object.entries, to iterate over the properties or entries of an object.

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
module.exports = author;
