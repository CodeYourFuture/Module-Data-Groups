// Predict and explain first...
// The code is attempting to iterate over the `author` object using a `for...of` loop.
// However, `for...of` is designed to iterate over iterable objects like arrays, strings
// or other iterable collections, not plain objects. Objects do not have a default iterator,
// which is why the code will throw a `TypeError` when it tries to iterate over it.

// To fix this, we can use `Object.values()` to get an array of the object's
// property values, which can then be iterated over with a `for...of` loop

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
