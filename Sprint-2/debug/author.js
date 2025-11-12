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

// Prediction:
// The code will not log the property values of the author object as intended.
// This causes the error because author is not iterable.

 // Explanation:

// The original code likely used a for...in loop which iterates over the keys of the object, not the values.
// Therefore, logging the key would not give the desired property values.
// By using Object.values(author), we can directly iterate over the values of the object.

// Fixed code:
for (const value of Object.values(author)) {
  console.log(value);
}