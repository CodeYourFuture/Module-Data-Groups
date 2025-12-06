// Predict and explain first...

// For..of loop only supports iterable objects (arrays), not objects
// Should use For..in instead
// Value needs to be accessed from the object using bracket notation

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
