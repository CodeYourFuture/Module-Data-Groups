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
// The current return value when inverted is called with { a: 1 } is{ key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value when inverted is called with { a: 1, b: 2 } is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value when invert is called with { a : 1, b: 2 } is { 1 : a, 2: b }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries return an array where each element of array is a pair key-value. It is needed in this program because an object can not be looped with for...of.

// d) Explain why the current return value is different from the target output.
// The current return value is different from the target output because when we apply
//invertedObj.key = value we are declaring a new key and assigning the value

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
