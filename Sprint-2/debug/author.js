// Predict and explain first...
// Prediction:
// I think this code will produce a TypeError because
// a regular JavaScript object is not iterable.

// Explanation:
// The for...of loop works with iterable values such as
// arrays and strings, but it cannot loop directly over
// a regular object. We can use Object.values() to access
// all the property values.

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

// author is an object and it is not iterable.
// for...of works with arrays and strings, but not directly with objects.
// We can use for...in to loop through an object's keys.
