// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/*function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}*/

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 1, key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object.
// It is needed in our invert() function, because we want to loop through both keys and values of the object.
// It allows us to access both the key and value in each iteration of the loop.

// d) Explain why the current return value is different from the target output
// The current return value is different from the target output because it doesn't use the key variable,
// instead, it literally assigns the value to the key property of the invertedObj object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invert;
