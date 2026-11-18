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

// a) What is the current return value when invert is called with { a : 1 }
// Answer: it return { key: 1 }. The value 1 remains as a value when it should have been made
// the key and turned it into a string. The key here becomes the word key, because the line
// invertedObj.key = value;
// initiates a new key-value pair with the key's name being key. In order to use the variable key's
// value as the key name instead, you need to use bracket notation.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: it returns { key: 2 }
// This is for the same reason as above, the key name is set to key rather than the value of the
// variable key. So when the for loop runs the second time, the previous key: 1 pair gets overwritten
// to key: 2. If bracket notation was used, both pairs would be saved. Then they also need to invert
// of course.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Answer: It creates arrays to iterate over with for of, and then immediately access both the
// key and the value and put them into variables, rather than just accessing the key with a for in
// and then needing to use the key to index into the object to find the value.

// d) Explain why the current return value is different from the target output
// Answer: It doesn't invert the key and value, and it hardcodes the name of the key to be key,
// which both loses the actual key name and the ability to save more than 1 pair.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Answer: Fixed implementation and added tests in file invert.test.js
