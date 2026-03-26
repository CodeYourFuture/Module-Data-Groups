// Predict and explain first...
// The loop method used is for arrays and not for object literals.
// for object literals the "in" key word is used to access the keys.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(value);
}
