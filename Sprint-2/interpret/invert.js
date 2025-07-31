// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a : 1 }
//{ key: 1 } // because  literally sets the property "key" instead of using the variable value as the new key.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 } //because The second iteration of the loop overwrites the first one because it keeps writing to "key".

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{ "1": "a", "2": "b" } // because Each key and value from the input object should be swapped.
// Object.entries(obj) returns an array of [key, value] pairs from the object.
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries({ a: 1, b: 2 }) 
// → [['a', 1], ['b', 2]] because 

// d) Explain why the current return value is different from the target output
// The original code used invertedObj.key = value, which:
// Created a property literally named "key"
// Overwrote it in every loop
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  // Validate that input is a non-null object and not an array
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error("Input must be a non-null object");
  }

  const invertedObj = {};

  // Loop over key-value pairs using Object.entries
  for (const [key, value] of Object.entries(obj)) {
    // Swap the key and value
    invertedObj[String(value)] = key;
  }

  return invertedObj;
}
module.exports = invert;