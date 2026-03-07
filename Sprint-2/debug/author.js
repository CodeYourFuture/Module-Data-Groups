/* ======== Initial Script ======= */
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

try {
  for (const value of author) {
    console.log(value);
  }
} catch (error) {
  console.error("Error:", error.message);
}

/* ============== Prediction ============== */
// It will print out only the name of the keys (i.e. firstName, lastName,
// occupation, age, and alive), but not their actual values.

/* ============== Actual Result ============== */
// Error: author is not iterable.
// This error occurs because the for...of loop can only be used with
// iterable objects like arrays, strings, etc. Since 'author' is an object,
// it is not iterable. To fix this, we can use a for...in loop instead.

/* ============== Corrected Script ============== */
for (const key in author) {
  console.log(author[key]);
}
