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
// I think its { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// I think it should be { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// my suggestion is { '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// It is needed in this program to iterate over the key-value pairs of the object to swap them.

// d) Explain why the current return value is different from the target output
// I think its different because in the line invertedObj.key = value;
// the key is being set as the string "key" instead of using the variable key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
