// Predict and explain first...
// for .. of only works with iterable objects like arrays or strings. but author is an object.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {//This extracts the values into an array, and arrays ARE iterable, so the loop works.
  console.log(value);
}
