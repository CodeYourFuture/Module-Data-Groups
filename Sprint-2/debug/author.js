// Predict and explain first...
// As object is key-value pairs of data, it isn't exactly iterable like arrays.
// We can loop over the keys or values of an object using Object.entries()

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
