// Predict and explain first...

// This program attempts to log out all the property values in the object.

// Create an object that holds author details
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Use Object.values() to get an array of all values, then loop over them
for (const value of Object.values(author)) {
  console.log(value);
}

/*
## Explanation of the Fix

- Object.values(author) is a built-in function that takes an object and returns an array containing only the values. In our case it returns: ["Zadie", "Smith", "writer", 40, true]
- Since the result is now an array, for...of works correctly and goes through each value one by one.

## How to Test in the Terminal
node author.js

Expected output:
Zadie
Smith
writer
40
true
*/
