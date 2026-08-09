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
//  console.log(value);
// }

for (const key in author) {
  console.log(author[key]);
}

// the iteration method does not work for the object.
// TypeError TypeError: author is not iterable will be shown
// Change the correct method with the object
