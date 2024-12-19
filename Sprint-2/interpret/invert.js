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
// console.log(invert({ x: 10, y: 20 }))
// console.log(invert({ a: 1 }))
// a) What is the current return value when invert is called with { a : 1 }
// { a : 1 } is the current output
// console.log(invert({ a: 1, b: 2 }))
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ a: 1, b: 2 } is the current output
// c) What is the target return value when invert is called with {a : 1, b: 2}
//the target is {1 : a, 2: b}
// c) What does Object.entries return? Why is it needed in this program?
//Its a built in function that returns the [key, value] pairs. We need it to access the key and value pairs respectively of every keyvalue pair in the object
// d) Explain why the current return value is different from the target output
//We are assigning the old key to be the new key and the old value to be the new value instead of switching it around
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//I've fixed it and written a test file.

module.exports = invert;