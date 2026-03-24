// Predict and explain first...

// This program attempt to log out all the property values in the object, It isnt working because we are trying to iterate over an object using a for... of loop, which is not valid. To fix this, we can use a for... in loop to iterate over the keys of the object and then access the corresponding values.

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
}
