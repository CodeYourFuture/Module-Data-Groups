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
// { key: 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }
// c) What does Object.entries return? Why is it needed in this program?
// It returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// It is needed because plain JavaScript objects are not iterable by default, so we cannot use a 'for...of' loop directly on an object without it.
// d) Explain why the current return value is different from the target output
// Using dot notation (invertedObj.key) creates a literal property named "key" instead of evaluating the variable.
// We must use bracket notation (invertedObj[value]) to dynamically set the property name using the variable's value.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
