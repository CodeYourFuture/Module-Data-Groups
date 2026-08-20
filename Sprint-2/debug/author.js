// Predict and explain first...
// TypeError: author is not iterable because A for...of loop is used for iterable things such as arrays, strings, Maps, and Sets.

// But author is a plain object. Plain objects aren't directly iterable with for...of.

// To loop through an object's values, use:

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