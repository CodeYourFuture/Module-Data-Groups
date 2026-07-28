// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
//This isn't working because we need the key-value pairs, so we need a for..in loop
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (let value in author) {
  console.log(author[value]);
}
