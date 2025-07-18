// Predict and explain first...
// - I predict that it won't work, because the variable 'value' isn't defined.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// - I was wrong, the error that it gives is that the variable 'author' is not iterable.
// Checking for a solution...

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
