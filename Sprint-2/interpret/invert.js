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
// the current return value is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current return value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value should be { '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
// it returns an array of a given object in [key, value] pairs.

// d) Explain why the current return value is different from the target output
// because in the loop, it always assigns the property 'key' to the value,
// so the final result only contains one property 'key' with the last value assigned in the loop.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Code fixed.

console.log(invert({ a: 1 })); // { '1': 'a' }
module.exports = invert;
