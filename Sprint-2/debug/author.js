// Predict and explain first...
// This code is intended to log out all the property values in the `author` object.
// However, it is not working because the `for...of` loop is designed to iterate
// over iterable objects like arrays or strings, but the `author` object is a plain object
// which is not iterable. To fix this, we can use `Object.values()` to get
// an array of the object's values, which can then be iterated over with a `for...of` loop.

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
  const value = author[key];
  console.log(value);
}
