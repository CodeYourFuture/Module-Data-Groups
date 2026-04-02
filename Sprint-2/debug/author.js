// Predict and explain first...

// for.. of loops are used with Arrays, not Objects.
// I'm expecting an error
// For Objects, use for.. in loops

// Update after feedback:
// I completely forgot `value` on it's own only accesses the property's key. To access the actual value I still need to use bracket notation, author[value]

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
