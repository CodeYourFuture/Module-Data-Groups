// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
const assert = require("node:assert/strict");
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
assert.deepEqual(invert({ a: 1, b: 2 }), { 1: "a", 2: "b" });
console.log(invert({ a: 1, b: 2 }));
// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{1 : a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries returns an array containing the object's key-value pairs.
//[["a", 1], ["b", 2]]
// We use Object.entries() because we need to access both the keys and values of an object so we can swap them.

// d) Explain why the current return value is different from the target output
// because in this line (invertedObj.key = value;) javascript create a property literally called "key
// it does not use the value stored inside the key, in this case we need to use []

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
