// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }
  return invertedObj;
}

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
// console.log(invert({ a: 1 }));
// It is: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// console.log(invert({ a: 1, b: 2 }));
// it is: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// it should be : { 1: "a", 2: "b" }

// c) What does Object.entries return? Why is it needed in this program?
// it is containing each key/value pair
// it takes an object and turns it into an array

// d) Explain why the current return value is different from the target output
// its because of "invertedObj.key = value;" each time it is running its writes
// to the same property of "key" basically overwriting the previous one.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
