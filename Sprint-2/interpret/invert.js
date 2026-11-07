// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (typeof obj !== "object"){
    throw new Error('invert requires an object.')
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
We dont swop the key value pairs after they are in array form, we only place them back into the object as they were before.
invertedObj also returns uses key as a property name, not a placeholder. When we call the function key is overwritten with more than one key-value pair as well so only the last k-v pair shows but with "key" as the key name.

e) Fix the implementation of invert (and write tests to prove it's fixed!)
*/