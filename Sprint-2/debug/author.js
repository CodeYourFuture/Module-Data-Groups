const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Explanation:
// The issue was using `for...of` directly on an object, which caused a TypeError.
// To iterate over the values of an object, I used `Object.values()` to get an array of the values.

for (const value of Object.values(author)) {
  console.log(value);
}

