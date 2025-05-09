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
//console.log(invert({ a: 1 }));
//console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
// it returns { key: 1 }
// invertedObj.key does not use the value stored in key but creates a property named "key" inside invertedObj.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// it returns { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value should be { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries converts an object in an array of key-value pairs; so it returns [ ['a', 1] ] and [ ["a", 1], ["b", 2] ]
// It is needed because it allows iteration over both keys and values unlike the for...in loop which iterates over only keys, and values would be difficult to access.

// d) Explain why the current return value is different from the target output
// invertedObj creates a property name, "key" and does not use the value

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// (invertedObj.key = value) - creates a property named "key", not the actual variable value.
// (invertedObj[value] = key) - Uses the value inside the variable as the actual property name.
