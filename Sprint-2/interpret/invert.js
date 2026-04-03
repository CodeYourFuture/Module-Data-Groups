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

// a) What is the current return value when invert is called with { a : 1 }
{
  key: 1;
}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
{
  key: 2;
}
// c) What is the target return value when invert is called with {a : 1, b: 2}
return { 1: "a", 2: "b" };

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from an object.
//It is needed so we can loop through the object and access both keys and values.
Object.entries({ a: 1, b: 2 });
// [["a", 1], ["b", 2]]

// d) Explain why the current return value is different from the target output
//The current output is wrong because invertedObj.key uses a fixed property name instead of the variable key, so it overwrites the same property each time.
//It should use invertedObj[value] = key to properly swap keys and values.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
const invert = require("./invert.js");

test("inverts a normal object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

test("inverts a single pair", () => {
  expect(invert({ x: 10 })).toEqual({
    10: "x",
  });
});

test("returns empty object when input is empty", () => {
  expect(invert({})).toEqual({});
});
