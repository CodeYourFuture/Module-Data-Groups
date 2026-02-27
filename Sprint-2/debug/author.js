// Predict and explain first...
// it will throw error or just print out undefined because 

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// Because author is not array rather object so we can not use for loop, we use object.values to get loop

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
