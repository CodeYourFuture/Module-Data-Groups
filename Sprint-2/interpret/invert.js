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

const testObj = { a: 1, b: 2 };
console.log(invert(testObj));

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// - The current return value is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// - The current return value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// - The target return value is {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// - Object.entries returns an array of arrays,
// where each inner array represents a [key, value] pair from the input object.
// - It is needed to transform the given object into a nested array of the key-value pairs.
// Then use that array to invert the object's key and value.

// d) Explain why the current return value is different from the target output
// - Because this line 13 creates a property named "key",
// instead of inverting the original key and value.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
