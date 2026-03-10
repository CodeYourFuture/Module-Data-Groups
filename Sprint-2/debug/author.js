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

for (const value of Object.values(author)) {
  console.log(value);
}
// The problem is that the code is trying to log out the values of the object using a for...of loop, but it is not using the correct syntax to access the values. The Object.values() method returns an array of the object's values, so we need to use a for...of loop to iterate over that array and log each value.