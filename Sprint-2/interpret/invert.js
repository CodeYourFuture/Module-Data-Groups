// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};
  if (typeof obj !== "object" || obj === null || Array.isArray(obj))
    return invertedObj;
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// it returns an array of the pairs properties [key, value] of the object.
// it is needed in this program to iterate over the key value pairs of the object to swap them in new object.

// d) Explain why the current return value is different from the target output
// because first it doesn't swap.
// second, we're using the dot notation to assign the value where we should user the brackets notation as the key is variable and not a string literal.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
