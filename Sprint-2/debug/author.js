// Predict and explain first...

// value is undefined, because author is an object
// and can not be iterated like array

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const [key, value] of Object.entries(author)) {
  console.log(`${key}: ${value}`);
}
