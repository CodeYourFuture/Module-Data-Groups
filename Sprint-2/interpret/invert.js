// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    throw new TypeError("Invalid input: Input must be a plain object");
  }
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// Answer: { key: 1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: { key:2}
// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: { '1': 'a', '2': 'b' }
// d) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of [key, value] pairs, like: [ [ 'a', 1 ], [ 'b', 2 ] ]
// e) Explain why the current return value is different from the target output
// Answer: The current return value is different from the target output because `invertedObj.key`
// uses the literal string "key" instead of the variable key. To use the variable's value as the property name,
// we must use bracket notation: invertedObj[value] = key.
// f) Fix the implementation of invert (and write tests to prove it's fixed!)
