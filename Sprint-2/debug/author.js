// Predict and explain first...

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
  console.log(author[value]);
}

// Prediction: an error should pop up since "of" should be "in".
// What happened: author is not iterable.
// Changed "const value of author" to "const value in author" and console.log(value); to console.log(author[value]);