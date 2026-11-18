// Predict and explain first...
// it won't loop over it as if it was an array

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (let prop in author) {
  console.log(author[prop]);
}
