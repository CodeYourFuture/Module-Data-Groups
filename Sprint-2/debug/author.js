// Predict and explain first...

// I guess the problem could be induced by console.log(value), as each value is a key: value pair, but we only need the values.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(Object.values(author));

// After running the code, I got TypeError: author is not iterable
// so, the actual problem is an object cannot be iterated in for loop.
// To print out all the values in author, I attempted Object.values(author)
// which return all the values in an array [ 'Zadie', 'Smith', 'writer', 40, true ]
