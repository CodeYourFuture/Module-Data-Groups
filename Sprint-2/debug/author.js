// Predict and explain first...
// Prediction: 'author' is an object, not an array. The 'for...of' loop doesn't work on plain objects, so it will throw an error.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key in author) {
  console.log(author[key]);
}
