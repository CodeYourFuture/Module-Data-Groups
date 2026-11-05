// Predict and explain first...
/*
Predict
for of loops work on iteration and we cant iterate objects
To fix this we use for in loop 
This loops over the keys
Now we can use author[value] to get values
*/
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
