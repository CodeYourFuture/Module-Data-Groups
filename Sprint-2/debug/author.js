// Predict and explain first...
// This code will throw an error.`author` is an object.
// and `for…of` only works on arrays or strings.
// Use `Object.values(author)` or `for…in` to loop over object values.
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
