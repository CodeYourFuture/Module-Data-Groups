// Predict and explain first...
//The code has a problem because the for...of loop is being used on an object (author). However, for...of is designed to work with iterable objects like arrays, not regular objects. This will throw an error.

//Steps to Fix the Problem Understand the Issue:The goal is to log all the values in the author object (e.g., “Zadie”, “Smith”, “writer”, 40, true).To loop through the values of an object, you need to use Object.values() or a similar method, because objects are not iterable.
//Fix the Code:
//Replace the for...of loop with a loop that works for objects, such as iterating over Object.values().



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
