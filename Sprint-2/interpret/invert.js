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
// Answer: { key: 1 } — the loop runs once, and the old buggy line
// invertedObj.key = value set a literal property called "key" to 1.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: { key: 2 } — the loop runs twice, and each time it overwrote the
// same literal "key" property, so only the last value (2) survived.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: { 1: "a", 2: "b" } — each original value becomes a key, and each
// original key becomes the value at that new key.

// c) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries(obj) returns an array of [key, value] pairs for
// every property in obj, e.g. Object.entries({a: 1, b: 2}) returns
// [["a", 1], ["b", 2]]. It's needed because inverting requires both the
// key and value together at the same time, so each can be swapped into
// the other's position.

// d) Explain why the current return value is different from the target output
// Answer: the original code used invertedObj.key = value, where .key is
// a literal property name (the string "key"), not the loop variable key.
// So every iteration overwrote the same fixed property instead of creating
// a new one, and it also assigned in the wrong direction (value into a key
// slot named "key", instead of swapping key and value with each other).

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
console.log(invert({ x: 10, y: 20 })); // should print { '10': 'x', '20': 'y' }
console.log(invert({ a: 1, b: 2 })); // should print { '1': 'a', '2': 'b' }

module.exports = invert;
