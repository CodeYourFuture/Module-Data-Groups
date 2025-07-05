// Predict and explain first...

// This code is trying to log out the values of the properties in the `author` object.
// However, the `for...of` loop is designed to iterate over iterable objects like arrays
// or strings, not over objects. Since `author` is an object, the loop will not work as intended,
// and it will throw a TypeError because objects are not iterable by default.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author.values[author]) {
  console.log(value);
}
