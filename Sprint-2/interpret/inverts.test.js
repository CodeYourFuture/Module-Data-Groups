const invert = require("./invert");

// Test cases for single key-value pair
test("inverts a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

// Test cases for multiple key-value pairs
test("inverts multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

// Test cases for string values
test("inverts string values", () => {
  expect(invert({ a: "x", b: "y" })).toEqual({ x: "a", y: "b" });
});

// Test cases for mixed value types
test("overwrites keys when values are not unique", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" }); // last one wins
});

// Test cases for empty object
test("inverts an empty object", () => {
  expect(invert({})).toEqual({});
});
