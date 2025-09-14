// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // fix: use computed property instead of "key"
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// Answer: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: { key: 2 } (the second assignment overwrites the first)

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries(obj) returns an array of [key, value] pairs.
// Example: Object.entries({a:1, b:2}) → [["a",1],["b",2]].
// It’s needed because for...of can iterate over these pairs easily.

// d) Explain why the current return value is different from the target output
// Answer: The code used invertedObj.key = value, which creates a property literally
// called "key". We need invertedObj[value] = key to swap properly.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Answer: Fixed above by changing to invertedObj[value] = key.

