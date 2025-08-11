// Predict and explain first...
//The for...of loop is designed for iterables like arrays, strings, or maps — not plain objects.Objects are not iterable in this way, so this throws a TypeError

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

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
