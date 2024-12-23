// Predict and explain first...
// Object is not iterable

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// The object key and value must be refered first

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const [key,value] of Object.entries(author)) {
  console.log(`${key}: ${value}`);
}
