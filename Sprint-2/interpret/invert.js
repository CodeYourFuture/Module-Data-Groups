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
// a) Current return value: { key: 1 }
// a) Target return value: { 1: "a" }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// b) Current return value: { key: 2 }
// b) Target return value: { 1: "a", 2: "b" }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// c) Current return value: { key: 2 }
// c) Target return value: { 1: "a", 2: "b" }

// c) What does Object.entries return? Why is it needed in this program?
// c) Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// c) It is needed in this program to iterate over each key-value pair in the input object so that we can swap them and build the inverted object.

// d) Explain why the current return value is different from the target output
// d) The current return value is different from the target output because the implementation incorrectly assigns the value to a fixed key 'key' 
// in the inverted object, rather than using the actual value from the original object as the key in the inverted object. This results in only the 
// last processed value being stored under the same key 'key', overwriting any previous entries.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// e) Fixed implementation is provided above. Below are the test cases in a separate file.

module.exports = invert;