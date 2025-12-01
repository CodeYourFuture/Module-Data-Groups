// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  // Guard: only accept plain objects (not null, not arrays, not primitives)
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    return {};
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Ensure the value is used as a string key (object keys are strings)
    invertedObj[String(value)] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// { '1': 'a' }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { '1': 'a', '2': 'b' }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
// It returns  an array of key-value pairs from the object.
// It is needed to iterate over each key-value pair in the input object.

// d) Explain why the current return value is different from the target output
// They are the same. Object keys are always strings, so the functions converts values into string keys and assigns the original key as the new value. 

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Invert function passes 4 edge case tests.
