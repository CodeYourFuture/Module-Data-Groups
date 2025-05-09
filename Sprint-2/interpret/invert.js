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
// the return value is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the return value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target value should be { "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object.
// It is needed because javascript objects are not converted to be iterable Object.entries transforms the object into an array of key value pairs, enabling loops through constructs like for...of.
// It also enables dynamic access to keys and values. By giving the key and value for each iteration, Object.entries simplifies the process of swapping them and this is essential for the invert function.

// e) Explain why the current return value is different from the target output
// invertedObj.key = value; - the current value because it returns the literal string. Every iteration is overwritten by the property named key.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
// should use invertedObj[value] = key; instead of invertedObj.key = value;
