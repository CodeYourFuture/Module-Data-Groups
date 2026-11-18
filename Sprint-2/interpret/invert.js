// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new Error("invert requires an object.");
  }
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
/*
a) What is the current return value when invert is called with { a : 1 }
{key: 1}

b) What is the current return value when invert is called with { a: 1, b: 2 }
{key: 2 }

c) What is the target return value when invert is called with {a : 1, b: 2}
{"1": "a", "2": "b"}

c) What does Object.entries return? Why is it needed in this program?
It returns an array of key value pairs from the object.
It is needed because we cannot iterate over objects with for..of. We convert the obj to array (key-value pairs) using Object.entries and then we can iterate.

d) Explain why the current return value is different from the target output
The original code used the literal string "key" instead of the variable key, so it didn't actually swap the values. It just assigned the word "key" as the value.

e) Fix the implementation of invert (and write tests to prove it's fixed!)
*/
