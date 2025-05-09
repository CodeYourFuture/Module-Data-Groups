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
//The current return value is { key: 1 }. This is incorrect because key is being set as the literal string key instead of swapping the key and value.


// b) What is the current return value when invert is called with { a: 1, b: 2 }
//The current return value is { key: 2 }. This is incorrect because only the last value of the loop (b: 2) is being stored, and the key is again being set as "key".


// c) What is the target return value when invert is called with {a : 1, b: 2}
//The target return value is { 1: 'a', 2: 'b' }. This is the correct result where the keys and values have been swapped.

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries returns an array of key-value pairs from the object. For example, for { a: 1, b: 2 }, it returns [ ['a', 1], ['b', 2] ]. It is needed to iterate over both the keys and values so they can be swapped.


// d) Explain why the current return value is different from the target output
//The current return value is different because the code is using invertedObj.key = value; instead of invertedObj[value] = key;. This means it is assigning the literal string "key" instead of dynamically swapping the keys and values.


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
