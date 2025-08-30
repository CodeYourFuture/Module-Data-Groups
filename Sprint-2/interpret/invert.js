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

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 } - current return value is {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 } - current return value is {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2} -  current returns an array of values

// c) What does Object.entries return? Why is it needed in this program? - This converts and returns the object as an array

// d) Explain why the current return value is different from the target output - the key is treated literally as a string property name, instead of dynamically using the value as a property name

// e) Fix the implementation of invert (and write tests to prove it's fixed!) I have created the invert.test.js to test
