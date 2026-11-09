// Predict and explain first...

// Prediction ======> TypeError: author is not iterable at Object

// Explanation ======> Because plain JavaScript objects are not iterable, attempting to use a for...of loop directly on the object throws an error, meaning you must use Object.values(author) to loop through its values instead.

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
