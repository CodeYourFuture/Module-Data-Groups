// Predict and explain first...
// The 'author' variable is an object, not an array or string.
// for..of loops require an iterable, but plain objects are not iterable.
// This will throw a TypeError: author is not iterable.
// Nothing will be logged to the console.

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
