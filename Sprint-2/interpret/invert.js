// Let's define how invert should work
// Invert is a function that takes an object and returns a new object
// where the keys and values are swapped.
// For example, if invert is called with { a: 1, b: 2 },
// the target output should be { "1": "a", "2": "b" }

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
// For example, invert({ a: 1, b: 2 }) should return { "1": "a", "2": "b" }

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

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
