// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The loop overwrites the property key in the invertedObj for each key-value pair in the object.
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Each key-value pair should be swapped, with the value as the new key and the key as the new value.
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of the object’s key-value pairs, where each pair is represented as a two-element array.
// For example: Object.entries({ a: 1, b: 2 }); returns: [['a', 1], ['b', 2]]

// d) Explain why the current return value is different from the target output
// The current return value is incorrect because invertedObj.key = value sets a property called key instead of
// dynamically using the value as the key. The syntax does not correctly assign dynamic keys to invertedObj.



// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // Use the value as the key and the key as the value
  }

  return invertedObj;
}

module.exports = invert;
