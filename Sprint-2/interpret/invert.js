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

console.log(invert({x : 10, y : 20})); //output: {"10": "x", "20": "y"}
console.log(invert({ a: 1, b: 2 })); // output: {"1": "a", "2": "b"}

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of the key/pairs of an object, it makes it simple to use objects in loops.
// In this case, if Object.entries is removed, it would occur error showing obj is not iterable.
// Therefore, Object.entries is needed as it changed obj to array so that it can be looped over.

// d) Explain why the current return value is different from the target output
// There are two problems in the current function
// 1. key and value haven't been swap
// 2. invertedObj.key is unable to return the key of the object

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
