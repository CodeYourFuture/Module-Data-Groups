// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
/*
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
*/
// a) What is the current return value when invert is called with { a : 1 }
//The current return value when invert is called with {a : 1 } is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value when invert is called with { a: 1, b: 2 } is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//The target return value is { 1: "a", 2: "b" }

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries(obj) converts an object into an array of [key, value] pairs. We need it in this program because it makes easier to swap value.

// d) Explain why the current return value is different from the target output
//The current return value is different from target output because of how the code has been passed on line 13.
//invertedObj.key is using dot notation which is pushing the word key as a property instead of real key.
//Apart from dot notation the keys and values are also not swapped correctly.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("Input must be an object");
  }
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
