// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = Number.isNaN(Number(key)) ? key : Number(key); 
  }

  return invertedObj;
}
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 } ref ln 10 and 13
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// i think { key: 2} cause keys value is updated on the second iteration
// c) What is the target return value when invert is called with {a : 1, b: 2}
// if by target you mean the expected then i think {1 : a, 2 : b }
// c) What does Object.entries return? Why is it needed in this program?
// its a method that takes a obj and returns the [key, value] pairs.
// d) Explain why the current return value is different from the target output
// cause line 13 is not doing the job right
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// in file invert.test.js