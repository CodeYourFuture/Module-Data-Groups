const invert = require("./invert.js");


test("inverts an object with one key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("inverts an object with multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("handles an empty object", () => {
  expect(invert({})).toEqual({});
});

test("handles values that are strings", () => {
  expect(invert({ a: "x", b: "y" })).toEqual({ x: "a", y: "b" });
});

test("overwrites duplicate values", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" }); // The second key overwrites the first
});
