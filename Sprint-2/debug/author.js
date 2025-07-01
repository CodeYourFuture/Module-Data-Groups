// Predict and explain first...
// the for of loop is trying to iterate over an object.
// In JavaScript, the `for...of` loop is used to iterate over iterable objects like arrays, strings, and other collections. 
// However, objects in JavaScript are not iterable by default.
// To fix this, we can use `Object.values(author)` to get an array of the

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
