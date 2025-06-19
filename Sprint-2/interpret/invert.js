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
console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
// the current return value is {key:1} when invert is called with { a : 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current return value is { key: 2 } when invert is called with { a: 1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value is {"1":"a","2":"b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an object's key value pairs as an array then we can use the array to invert
// the key and pair values

// d) Explain why the current return value is different from the target output
// on line 13 we should have used bracket notation instead of dot notation, this is contributing to the
// issues we are having with the program. Also we were not performing the inverting

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
