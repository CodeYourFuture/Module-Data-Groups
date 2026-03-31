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

// a) What is the current return value when invert is called with { a : 1 }
// { key : 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key : 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1" : "a", "2" : "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of arrays
// Each inner array has 2 items: one the key and the other the value of the original
// I.e.:  Object.entries({ a: 1, b: 2 }) returns [["a", 1], ["b", 2]]
// It is needed so we can loop through the key/value pairs

// d) Explain why the current return value is different from the target output
// invertedObj.key uses dot notation
// This creates or updates a new property called key, instead of using the value of the existing key variable. As a result, each iteration overwrites the same property.
// In addition, the code is not swapping the keys and values, so the object is not actually inverted.
// To fix this, we should use bracket notation and assign the original value as the new key and the original key as the new value: invertedObj[value] = key

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// See invert.test.js

module.exports = invert;
