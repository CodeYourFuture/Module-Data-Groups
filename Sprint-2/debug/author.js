// Predict and explain first...
// I think this code will not work as expected because the `for...of` loop is trying to iterate over an object.
// Objects cannot be iterated directly with `for...of`.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem


const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}
