const invert = require("./invert.js");

// Given an object
// When invert is passed this object
// Then it should swap the keys and values
test("invert swaps the keys and values of an object", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({
    10: "x",
    20: "y",
  });
});

// Given an object with one key value pair
// When passed to invert
// Then it should return the swapped pair
test("invert swaps a single key value pair", () => {
  expect(invert({ a: 1 })).toEqual({
    1: "a",
  });
});

// Given an empty object
// When passed to invert
// Then it should return an empty object
test("invert on an empty object returns an empty object", () => {
  expect(invert({})).toEqual({});
});

// Given an invalid input like an array, string, number, null or undefined
// When passed to invert
// Then it should throw an error
test("invert throws an error for invalid input", () => {
  expect(() => invert([])).toThrow("Input must be an object");
  expect(() => invert("hello")).toThrow("Input must be an object");
  expect(() => invert(123)).toThrow("Input must be an object");
  expect(() => invert(null)).toThrow("Input must be an object");
  expect(() => invert(undefined)).toThrow("Input must be an object");
});
