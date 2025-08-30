// Predict and explain first...
// we cannot use the for...of loop on object but we can use it on object values

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const [key, value] of Object.entries(author)) {
  console.log(value);
}
