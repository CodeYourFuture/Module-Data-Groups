// Predict and explain first...
// This program attempts to log out all the property values in the object. its not going to work because we cannot use "for of" loop in this situation. 
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key in author) {
  console.log(author[key]);
}
