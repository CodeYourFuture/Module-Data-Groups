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
// a) Before the fix, invert({ a: 1 }) returned:
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// b) Before the fix, invert({ a: 1, b: 2 }) returned:
// { key: 2 }
// The second loop replaced the first value.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// c) The target return value is:
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// d) Object.entries returns an array of [key, value] pairs.
// It allows the loop to access both parts of each property.

// d) Explain why the current return value is different from the target output
// e) The original code used dot notation, which created a property
// literally named "key" instead of using the value dynamically.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;
