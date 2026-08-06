// Let's define how invert should work

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

console.log("invert.js loaded");

module.exports = invert;

// a) What is the current return value when invert is called with {a : 1}?
// The current return value when invert is called with {a: 1} is {key: 1}.

// b) What is the current return value when invert is called with {a: 1, b: 2}?
// The current return value when invert is called with {a: 1, b: 2} is {key: 2}.

// c) What is the target return value when invert is called with {a: 1, b: 2}?
// The target return value when invert is called with {a: 1, b: 2} is {1: a, 2: b}.

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries() returns an array containing the key-value pairs of an object.
// It is needed in this program because the function must access both the keys and the values in order to swap them.

// e) Explain why the current return value is different from the target output.
// The current return value is different from the target output because invertedObj.key = value does not use the variable key as the property name.
// Bracket notation is needed to swap the keys and values.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
