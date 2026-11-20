// Predict and explain first...
//we need to add Object.values(author) to returns an array containing all the values of the object.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for (const value of author) {
//   console.log(value);
for (const value of Object.values(author)) {
  console.log(value);
}
