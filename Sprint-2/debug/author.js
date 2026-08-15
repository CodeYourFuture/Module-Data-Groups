// Predict and explain first...
// Because it's trying to iterate through an object
// It should just print author without a loop

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(Object.values(author));
