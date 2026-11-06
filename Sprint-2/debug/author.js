// Predict and explain first...

// my prediction here is that we can not use for..of loop because author is not iterable.
// The reason is, it doesnt use indices it uses keys.instead we will use for..in loop.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}
