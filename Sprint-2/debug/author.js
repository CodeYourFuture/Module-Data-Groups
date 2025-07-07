// Predict and explain first...
// The code doesn't work because you can't use the "for...of" loop directly on an object.
// In JavaScript, objects are not iterable like arrays are.

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

