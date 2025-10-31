// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;  // Previously invertedObj.key = value;  BUG HERE! Fixed: use bracket notation and swap key/value
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Answer: { key: 1 }
// The bug causes it to create a property literally named "key" instead of using the variable value

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: { key: 2 }
// It keeps overwriting the same "key" property with each value from the loop

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: { "1": "a", "2": "b" }
// The values should become keys, and the keys should become values

// c) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries(obj) returns an array of [key, value] pairs.
// Example: Object.entries({ a: 1, b: 2 }) returns [["a", 1], ["b", 2]]
// It's needed so we can iterate through both keys AND values of the object at the same time
// Without Object.entries, we can only loop through keys OR values, not both.

// d) Explain why the current return value is different from the target output
// Answer: The bug is using dot notation: invertedObj.key = value
// Dot notation creates a property literally named "key" instead of using the variable's value
// It should use bracket notation: invertedObj[value] = key
// Also, it should swap the key and value positions

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Fixed! The correct line is: invertedObj[value] = key;
// Tests have been written in invert.test.js and all pass ✓

module.exports = invert;
