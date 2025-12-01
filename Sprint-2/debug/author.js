// Predict and explain first...
// for...of only works on arrays. An object isn’t an array, so we can’t loop over it directly.
// To find values from the object we need to convert it to an array of values first.

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
