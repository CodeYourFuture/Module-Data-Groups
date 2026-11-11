// Predict and explain first...
// The program will show an error because an object is not iterable.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// We cannot use a for loop directly to an object because objects are not iterable in JavaScript.

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
