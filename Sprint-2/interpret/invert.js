// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}



// a) What is the current return value when invert is called with { a : 1 }
// Object.entries({ a: 1 }) → [["a", 1]]
// The loop runs once with key = "a" and value = 1
// Inside the loop:
// invertedObj.key = value;
// creates a property literally named "key", not "a"
// So the result is { key: 1 }.
// Answer: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Object.entries({ a: 1, b: 2 }) → [["a", 1], ["b", 2]]
// First loop: invertedObj.key = 1 → { key: 1 }
// Second loop: invertedObj.key = 2 → overwrites previous value
// Final result: { key: 2 }
// Answer: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }
// The goal is to swap keys and values, so keys become values and values become keys

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of [key, value] pairs from the object
// Object.entries({ a: 1, b: 2 });
// returns [["a", 1], ["b", 2]]
// It’s needed so that the loop:
// for (const [key, value] of Object.entries(obj))
// can easily access both the key and value in one step.

// d) Explain why the current return value is different from the target output
// The current code uses invertedObj.key = value, which creates a property literally named "key".
// To use the variable key dynamically, you must use bracket notation:
// invertedObj[value] = key;

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
}

module.exports = invert;

