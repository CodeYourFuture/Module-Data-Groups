const invert = require("./invert.js");

/*
Implement a function called invert that swaps the keys and values of an object.

E.g. invert({ x: 10, y: 20 })
// returns { "10": "x", "20": "y" }
*/

// Acceptance criteria:

// Given an empty object
// When passed to invert
// Then it should return an empty object
test("returns an empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});

// Given an object with one property
// When passed to invert
// Then it should swap the key and value
test("inverts an object with one key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({
    "1": "a",
  });
});

// Given an object with multiple properties
// When passed to invert
// Then it should swap all keys and values
test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    "1": "a",
    "2": "b",
  });
});

// Given an object with string values
// When passed to invert
// Then it should swap the keys and values
test("inverts string values correctly", () => {
  expect(invert({ first: "apple", second: "banana" })).toEqual({
    apple: "first",
    banana: "second",
  });
});
