// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // swap key and value
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Before fixing the code it returned: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Before fixing the code it returned: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of [key, value] pairs.
// Example: Object.entries({a:1, b:2})
// returns: [["a",1], ["b",2]]
// It allows us to loop through both keys and values of an object.

// e) Explain why the current return value is different from the target output
// The bug was that the code used invertedObj.key which creates a property
// literally called "key". Instead we need to use the variable value as the key,
// so we use bracket notation: invertedObj[value] = key.

module.exports = invert;