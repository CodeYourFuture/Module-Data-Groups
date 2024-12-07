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
/*
This causes an error because it does not know iterate over an object directly with for of loop. To iterate over an object's properties and their values, we can use
 for in loop, This will iterate over the keys of the object. */
for (const key in author) {
  console.log(author[key]);
}
