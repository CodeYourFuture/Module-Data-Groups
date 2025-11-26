// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 } >> { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 } >> { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2} >> { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program? >> Object.entries returns an array of key-value paris.

// d) Explain why the current return value is different from the target output >> Because invertedObj.key = value creates a property called (key) instead of using hte variable key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// The fixed code:
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;

// Tests:
const invert = require("./invert.js");

// Single key
test("invert works for one key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

// Multiple keys
test("invert swaps keys and values for multiple pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    "1": "a",
    "2": "b",
  });
});

// Empty object
test("invert of an empty object returns empty", () => {
  expect(invert({})).toEqual({});
});

// Values become string keys
test("invert always returns string keys", () => {
  expect(invert({ x: 10 })).toEqual({ "10": "x" });
});
