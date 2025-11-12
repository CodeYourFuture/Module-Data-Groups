// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new Error("Parameter `obj` must be an object type");
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }

// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// { 1 : a, 2: b }

// c) What does Object.entries return? Why is it needed in this program?

// Returns an array of key/values of the enumerable own properties of an object
// It is a convenient way to map the object properties and values into key-value pairs

// d) Explain why the current return value is different from the target output

// Because of this line:
// invertedObj.key = value;
// The property "key" is declared and the value is assigned to the "key" property

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// Refer to invert.test.js
