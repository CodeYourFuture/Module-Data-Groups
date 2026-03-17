// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// using the key word "Object.velues" and assigning it to a variable passes only the values to the Object
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
let details = Object.values(author);
console.log(details);
