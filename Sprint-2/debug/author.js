// Predict and explain first...

//You’ll get an error

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// The for...of loop is used to iterate over iterable objects like arrays, strings, etc.

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
