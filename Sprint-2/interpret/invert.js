// Let's define how invert should work

//const { test } = require("picomatch");

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// - { key: 1 }
// - This is because the code is incorrectly using `key` as a literal string instead of the variable key.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// - { key: 2 } the same as the above question which is a. 

// c) What is the target return value when invert is called with {a : 1, b: 2}
// - { "1": "a", "2": "b" }
// - This is the expected output where keys and values are swapped. 
  
// c) What does Object.entries return? Why is it needed in this program?
// - Object.entries returns an array of key-value pairs from the object, allowing us to iterate over both keys and values.

// d) Explain why the current return value is different from the target output
// - The current return value is different because the code is incorrectly assigning the value to a literal string "key" instead
//   of using the variable key to create a dynamic property name in the inverted object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// Test cases to verify the implementation


