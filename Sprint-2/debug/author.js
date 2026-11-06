// Predict and explain first...

// Answer:
// A plain object is not iterable, so 'for...of cannot loop over author directly

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
