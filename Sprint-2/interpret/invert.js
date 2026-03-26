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

//const firstCall = invert({ a: 1 });
//firstCall={key:1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// const secondCall = invert({ a: 1, b: 2 });
//secondCall={key:2}
// c) What is the target return value when invert is called with {a : 1, b: 2}

// target value is {1:"a",2:"b"}

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries() returns an array whose elements are arrays corresponding
// to the enumerable string-keyed property key-value pairs found directly upon object.
// It is needed in this program because we want both the object keys and values

// d) Explain why the current return value is different from the target output
//current about is different from the target about because ofter the loop destructuring
//  the key and value is assigned  the array element of the objects  the property

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

