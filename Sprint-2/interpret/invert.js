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
{key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
{key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
{"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
[["a", 1], ["b", 2]]

// d) Explain why the current return value is different from the target output
Object.entries gives you: the key and the value,So we can swap them easily.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}