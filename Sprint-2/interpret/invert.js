// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error('Input must be an object');
  }
  
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//{key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// It returns an array of key value pairs. It is needed to iterate through the object.

// d) Explain why the current return value is different from the target output
// The current implementation is setting the 'key' as the property name instead of using the value of the variable key.
// Additionally there is no inversion happening, the value is being assigned to the key property instead of swapping them.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert;