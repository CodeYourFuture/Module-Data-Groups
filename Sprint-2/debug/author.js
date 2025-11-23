// Predict and explain first...
// Prediction: the code will throw an error
// Explanation: An object can not be used or accessed as an array.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for ( const key in author ) {
console.log(author[key]);
}
