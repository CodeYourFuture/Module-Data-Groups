// Predict and explain first...
// The program throws an error because a for...of loop only works with iterable values like arrays or strings.
// The author variable is an object, which is not iterable by default, so JavaScript cannot loop through it.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
const values = Object.values(author);
for (const item of values) {
  console.log(item);
}
