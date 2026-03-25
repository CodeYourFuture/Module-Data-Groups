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
// Answer: { key: 1 }


// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: { key: 2 }


// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: { "1": "a", "2": "b" }


// c) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries(obj) returns an array of [key, value] pairs,
// It is needed so we can loop over the object and easily get both key and value in the for...of loop using array destructuring: [key, value].


// d) Explain why the current return value is different from the target output
// Answer: In this implementation, the current return value already matches the target output, because we correctly use the value as the new key
// and the key as the new value: invertedObj[value] = key.


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// Answer: No changes needed to the implementation; it already works as required.

