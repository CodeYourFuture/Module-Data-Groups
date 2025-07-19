// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  // Check if input is a valid object and not null
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    return {};
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Use value as key, key as value
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {1: a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
// it returns an array of arrays with [key, value] of the input object

// d) Explain why the current return value is different from the target output
// incorrect use of .key and also no inversion is taking place.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
