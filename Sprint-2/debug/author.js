// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// ==> this code is looping through an object and only return the key not the value.
// ==> After testing I found that (for of) does not loop directly in objects and it was throwing error "author is not iterable". In this case we should use (for in) to iterate.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}
