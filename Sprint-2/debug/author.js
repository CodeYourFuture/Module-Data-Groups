// Predict and explain first...
// Prediction:
// I think this code will produce a TypeError because
// a regular JavaScript object is not iterable.

// Explanation:
// The for...of loop works with iterable values such as
// arrays and strings, but it cannot loop directly over
// a regular object. We can use Object.values() to access
// all the property values.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

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
//author is Object and it is not iterable
//for...of loop excepts  array and string but it not working with object type
//we should Use for... in for object
