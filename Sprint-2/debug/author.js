// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

/* Prediction */
// It will print out only the name of the keys (i.e. firstName, lastName, occupation, age, and alive), but not their actual values
// for (const { value, key } of author) {
//   console.log(value);
// }

// /* Fix */
// for (const key of author) {
//   console.log(author[key]);
// }

