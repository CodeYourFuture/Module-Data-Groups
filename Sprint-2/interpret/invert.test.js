const invert = require("./invert.js");

test("inverts a simple object with one key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("inverts an empty object", () => {
  expect(invert({})).toEqual({});
});

test("handles string values correctly", () => {
  expect(invert({ a: "x", b: "y" })).toEqual({ x: "a", y: "b" });
});

test("handles mixed data types in values", () => {
  expect(invert({ a: 1, b: true, c: null })).toEqual({ "1": "a", "true": "b", "null": "c" });
});

test("overwrites duplicate values with the last key", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" }); // 'b' overwrites 'a'
});
