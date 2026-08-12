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
//An object is not directly iterable, if we want to log out the values we can use a for in loop
for (const value in author) {
  console.log(author[value]);
}
