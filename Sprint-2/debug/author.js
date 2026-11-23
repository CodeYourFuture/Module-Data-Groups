// Predict and explain first...

//The function should return for all values in the object. But not sure the return before fix the problem

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.entries(author)) {
  console.log(value);
}
