// Predict and explain first...
// The code is trying to iterate over the `author` object using a `for...of` loop.
// However, `for...of` is designed to iterate over iterable objects like arrays or 
// strings and does not work with plain objects. Therefore, it will throw a `TypeError`
// indicating that the object is not iterable.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// It isn't working because the `for...of` loop is not suitable for iterating over
// an object. Instead, we can use `Object.values()` to get an array of the
// object's values and then iterate over that array. 

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
