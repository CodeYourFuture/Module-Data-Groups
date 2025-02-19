// Predict and explain first...
//Objects are not iterable with a for.. of loop, therefore, this code will throw an error
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
//instead use an for.. in loop
for (const value in author) {
  console.log(Object.values(author));
}
//console.log(Object.values(author));
