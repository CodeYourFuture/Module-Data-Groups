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

// for (const value of author) {
//   console.log(value);
// }
//This is wrong because author is not an array to address the elements within it by their index, author is an object, we need to call author first and then call the key firstName, lastName, occupation, age, alive

for (const key in author) {
  console.log(author[key]);
}