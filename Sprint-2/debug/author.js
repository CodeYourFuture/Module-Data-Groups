// Predict and explain first...
// TypeError: author is not iterable

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// for...of doesn’t work on objects — they aren’t iterable. It works on arrays, strings, etc.
// Need use Object.values(author) to convert object values into an array.
// Then for...of can loop through the values correctly.

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
