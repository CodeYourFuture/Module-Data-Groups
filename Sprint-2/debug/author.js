// Predict and explain first...

// This throws a TypeError because plain objects cannot be used with for...of directly.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Fix: Object.values() returns an array that can be looped over
for (const value of Object.values(author)) {
  console.log(value);
}
