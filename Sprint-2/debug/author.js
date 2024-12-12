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

const values = Object.values(author);
for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
