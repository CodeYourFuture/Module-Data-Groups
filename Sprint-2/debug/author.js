// Predict and explain first...

// The code will throw a `TypeError` because `author` is a plain object, and plain objects are not iterable (cannot be used with `for...of`).
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_plain_objects
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values


// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Get an array of values to iterate over
for (const value of Object.values(author)) {
  console.log(value);
}
