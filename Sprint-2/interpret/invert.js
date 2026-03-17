// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [value, key] of Object.entries(obj)) {
    invertedObj[key] = value;
  }

  return invertedObj;
}

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
//{key:1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{key:1, key : 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {'1':'a','2':'b'}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries() returns an array of [key, value] pairs from an object. It is used here to loop through the object and access both the key and value in each iteration.

// d) Explain why the current return value is different from the target output
// The return value is different because the program uses dot notation with a variable instead of bracket notation.
//  Also, the object needs to be inverted, so the key and value must be swapped when iterating through the entries.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
