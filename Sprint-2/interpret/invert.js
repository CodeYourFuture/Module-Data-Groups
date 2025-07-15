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


// a) What is the current return value when invert is called with { a : 1 }
// The current return value when invert is called with { a: 1 } is { key: 1 }.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value when invert is called with { a: 1, b: 2 } is { key: 2 }.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target return value when invert is called with { a: 1, b: 2 } should be { "1": "a", "2": "b" }.

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object.
// It is needed in this program to iterate over the object's properties and their corresponding values.

// d) Explain why the current return value is different from the target output
// The current return value is different from the target output because the code incorrectly assigns the value to the key in the inverted object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
