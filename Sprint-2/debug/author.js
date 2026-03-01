// Predict and explain first...
// The issue with this program is that for.. of only works on iterable objects.
// Plain JavaScript objects are not iterable, so this will throw a "TypeError".
// To fix this, we can use Object.values(author) which converts the object's value into an array.

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
