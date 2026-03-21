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

// a) What is the current return value when invert is called with { a : 1 }
console.log(invert({ a: 1 }));
//Result: { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
console.log(invert({ a: 1, b: 2 }));
// Result: { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

console.log(invert({ a: 1, b: 2 }));
// Result should be{"1": a, "2":"b"}

// c) What does Object.entries return? Why is it needed in this program?

// It takes an object and returns an array of key-value pairs, where each pair is itself an array:
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj));
//Result:[ [ 'a', 1 ], [ 'b', 2 ] ]

// d) Explain why the current return value is different from the target output

// The line invertedObj.key = value; creates a "key" and assign the value to it. With variables, we need to use bracket notation and dot notation.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

// After fixing the code i ran node and got the following accordingly:
//{ '1': 'a' }
//{ '1': 'a', '2': 'b' }
//{ '1': 'a', '2': 'b' }
//[ [ 'a', 1 ], [ 'b', 2 ] ]


module.exports = invert;