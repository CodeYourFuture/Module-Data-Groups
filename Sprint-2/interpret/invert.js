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
  // invert({ a: 1 }) -> output: { "1": "a" }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
  // invert({ a: 1, b: 2 }) -> output: { "1": "a", "2": "b" }

// c) What is the target return value when invert is called with {a : 1, b: 2}
  // return: { "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
  // Object.entries({ a: 1, b: 2 }) -> return: [['a', 1], ['b', 2]].
  // It's needed to loop over each [key, value] pair to swap them.

// e) Explain why the current return value is different from the target output
  // If written like invertedObj.key = value, it would create a property literally named "key".
  // This need to be fixed by using bracket notation: invertedObj[value] = key.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
  // Fixed at the line 13 by swapping key and value with bracket notation invertedObj[value] = key.
