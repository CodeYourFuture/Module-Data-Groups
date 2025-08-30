// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// The reason why it is not working is that, the object is not iterable

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key of Object.keys(author)) {
  // I will use object keys iterate through this object, because this changes the object into an iterable array
  console.log(`${key}: ${author[key]}`);
}
