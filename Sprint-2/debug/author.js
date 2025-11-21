// Predict and explain first...
// Prediction: This code will throw a TypeError saying that author is not iterable.
// Explanation: The for...of loop only works on iterable objects (arrays, strings, maps, etc.).
// Regular objects like "author" are NOT iterable, so JavaScript cannot loop over them using for...of.
// To loop through an object's values, we need to use Object.values(author), Object.keys(author),
// or Object.entries(author).

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
// Expected output:
// Zadie
// Smith
// writer
// 40
// true 