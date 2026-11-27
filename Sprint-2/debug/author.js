// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// My prediction:
// I think an error will be thrown because we are attempting to iterate
// over an object with for of. We need to use For in.
// And if we were using for in, it still wouldn't work
// because the keys would be printed instead of the values.
// When you iterate over an object you get only the keys and can access
// The values by using the key

// Explanation:
// After running the code, yes there was an error.
// It specified that author is not iterable.
// That is because author is an object and can't
// be iterated over as an array using for of.
// I will change to for in and access the values properly.

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
