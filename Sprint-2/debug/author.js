// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// I think the bug is that we are trying to use a for...of loop on an object and that is not allowed.
// We need to use object.values to access the values of this object.
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
