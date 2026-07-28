// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// To loop over object keys we use for in loop.In this case we  declared a variable `value`
// to hold the property name. In this case we use bracket notation instead of dot notation to
// access property value.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}
