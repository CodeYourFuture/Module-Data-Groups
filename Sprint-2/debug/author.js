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

for (const key in author) {
  console.log(author[key]);
}

// for...of does not work with a plain object because the object is not iterable.
// It throws: TypeError: author is not iterable.
// for...in iterates over the object's property keys.
// We can use each key to access the corresponding property value.