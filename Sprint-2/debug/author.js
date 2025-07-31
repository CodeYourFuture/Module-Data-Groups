// Predict and explain first...
/* The for..of statement is not right for the object case. The output in the terminal pointed that 
author is not iterable. Objects can't be iterated with for..of loop like strings, arrays, sets and maps*/

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const [key, value] of Object.entries(author)) {
  console.log(`${key} : ${value}`);
}
