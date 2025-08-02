// Predict and explain first...
// The code below is intended to log out all the property values of the `author` object.
// However, it will not work as expected because the `for...of` loop is designed
// to iterate over iterable objects like arrays or strings, not over objects.
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

for (const value of Object.values (author)) {
  console.log(value);
}
