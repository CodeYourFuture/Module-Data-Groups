// Prediction and explanation:
// The original code uses `for (const value of author)`, but `author` is an object,
// not an array or other iterable. This will throw a TypeError.
// To fix it, we need to loop over the object's values using Object.values().

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Fix: use Object.values() to get an array of the values
for (const value of Object.values(author)) {
  console.log(value);
}

