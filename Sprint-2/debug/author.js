// Predict and explain first...
// will throw a TypeError because Object.values() is not a function. The correct way to get the values of an object is to use Object.values(author) instead of Object.values(author). The code is trying to call Object.values() on the author object, which is not a function, hence the error.

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
