// Predict and explain first...
// The program does not work because for...of can only be used on iterable objects such as arrays or strings. The author variable is an object, which is not iterable by default. To fix the problem we can use Object.values(author) to convert the object values into an iterable array and then loop through them.
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
