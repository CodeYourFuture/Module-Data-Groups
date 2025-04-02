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

for (const value of author) {
  console.log(value);
}

//SOLUTIONS TO CODE

// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Here's why:

// The issue is that `author` is an object, and `for...of` is designed to iterate over iterable objects like arrays or strings, not objects. 
// The `for...of` loop cannot be directly used with an object. Instead, we need to either:
// 1. Use `for...in` to loop through the object's keys and access each property value.
// 2. Use `Object.values()` to get an array of the property values and iterate over that.

// Fixing the code using the correct approach:

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Corrected code:
for (const value of Object.values(author)) {
  console.log(value);
}
