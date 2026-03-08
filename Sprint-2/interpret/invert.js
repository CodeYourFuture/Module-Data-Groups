// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  // Check if the input is not an object
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input must be an object");
  }

  const invertedObj = {};

  // Loop through each key value pair and swap them
  for (const [key, value] of Object.entries(obj)) {
    // bracket notation uses the variable,
    // not the literal string "key"
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// The current return value when invert is called with { a : 1 } is { key:1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value when invert is called with { a: 1, b: 2 } is { key:2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value when invert is called with {a : 1, b: 2} is { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries converts an object into an array of [key, value] pairs,
// it's needed so you can loop through both the key and value at the same time

// d) Explain why the current return value is different from the target output
// The bug is invertedObj.key = value - dot notation sets a literal key called "key",
// instead of using the variable. It also overwrites itseld on every loop iteration,
// so you only ever get the last value.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
