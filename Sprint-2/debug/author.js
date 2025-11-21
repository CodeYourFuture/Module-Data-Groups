// Predict and explain first...
// Answer: When the code runs, the console.log will output an error in the terminal because you can not use for...of loop for an object, 
// instead, you use for...in loop

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}
