// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // correct implementation
    // invertedObj.key = value; incorrect implementation
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// The output is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The output is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target output is { "1": "a", "2": "b" } because the function should swap keys and values.

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object that lets us use a simple loop to go through each key and value.
// It is needed in this program because regular JavaScript objects don’t work directly with a for...of loop.

// e) Explain why the current return value is different from the target output
// The current return value is different from the target output because the code 'invertedObj.key = value' is using the string "key" as the property name instead of the variable key.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
// To fix the implementation, we need to use the variable key as the property name in invertedObj

module.exports = invert;
