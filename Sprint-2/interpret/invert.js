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
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { 1: "a", 2: "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Returns an array of key/values of the given object
// It is needed so that both the key and value can be destructured from the object and reassigned in the for..of loop

// d) Explain why the current return value is different from the target output
// Dot notation is being used in the for..of loop, bracket notation should be used instead as it will become a computed property
// value and key should also be swapped inside the for..of loop

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;
