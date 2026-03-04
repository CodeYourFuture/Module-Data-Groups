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
// With the buggy implementation (invertedObj.key = value), the result is:
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }
// because the property key" is overwritten in each loop iteration

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of [key, value] pairs.
// Example: Object.entries( {a:1,b:2}) → [['a',1],['b',2]]
// It allows us to loop through both the keys and values of the object.

// e) Explain why the current return value is different from the target output
// Because the buggy code used  invertedObj.key = value
// which creates a property literally called "key
// Instead, we need to use  invertedObj[value] = key to swap keys and values
