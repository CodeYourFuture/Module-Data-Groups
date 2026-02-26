// Predict and explain first...
/*
Prediction: TypeError: author is not iterable

Cause: Plain Js objects aren't iterable the way an array's elements are.
To iterate over keys and/or values use the Object.keys(), Object.values(), 
or Object.entries() methods to covert the data into an array first.
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

for (const value of Object.values(author)) {
  console.log(value);
}
