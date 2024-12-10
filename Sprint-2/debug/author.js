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

// 〰️ 1.Using for...in:
for (const key in author) {
  console.log(author[key]);
}

// 〰️ 2.Using Object.values(): 
/*
for (const value of Object.values(author)) {
  console.log(value);
}
*/

// 〰️ The issue here is that JavaScript objects are not iterable using the for...of loop. This loop is designed to work with iterable objects like arrays, strings, maps, and sets, but not plain objects.
// 〰️ Trying to use for...of, result will be TypeError or no output.

// 〰️ How we can fix it:
// 〰️ We can use the for...in loop or Object.values():
// 〰️ 1. Using for...in: This loop iterates over the keys of the object.
// 〰️ 2. Using Object.values(): This returns an array of property values, allowing you to use for...of

