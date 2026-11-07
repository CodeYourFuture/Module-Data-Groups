// Predict and explain first...
// Throw error because I don't think for of works like that for objects

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// Doesn't work because author isn't an iterable, so it can't be looped over

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
