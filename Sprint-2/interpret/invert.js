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
// { key : 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }
// c) What does Object.entries return? Why is it needed in this program?
// It returns an array of key-value pairs.
// It's needed because it allows us to iterate over the keys and values of the object.
// d) Explain why the current return value is different from the target output
// In line 9 we are assigning the value to the key "key" instead of the value of the key variable.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
