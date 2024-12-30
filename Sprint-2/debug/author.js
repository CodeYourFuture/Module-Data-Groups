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

for (const key in author) {
  console.log(author[key]);
}// because the author object is not an array, we can't use a for...of loop to iterate over the object's properties. We can use a for...in loop instead
// The for...in loop iterates over the properties of an object, in the order that the properties were added to the object. It does not iterate over inherited properties