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

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
const invert = require("./invert");

test("inverts a simple object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("returns empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});

test("handles non-string values as keys in the inverted object", () => {
  expect(invert({ a: 1, b: true, c: null })).toEqual({
    1: "a",
    true: "b",
    null: "c",
  });
});
