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
// Current return value is 1.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// The current return value is 2.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// The target value is { "1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of object [key, value] pairs.
// It converts an object into an array, so the loop works, since plain objects can't be used with loops.

// d) Explain why the current return value is different from the target output

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
