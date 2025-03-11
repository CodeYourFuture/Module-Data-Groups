// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// Explain: To iterate over an object's properties, you need to use a for...in loop or Object.values()
// for...of only works on iterable objects like arrays, strings, or other objects with an iterator

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
