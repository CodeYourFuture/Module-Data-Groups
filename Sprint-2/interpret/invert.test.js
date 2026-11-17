const invert = require("./invert.js");

test("invert swaps keys and values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("invert returns an empty object for an empty object", () => {
  expect(invert({})).toEqual({});
});

test("invert uses each original value as a key", () => {
  expect(invert({ a: "x", b: "y" })).toEqual({ x: "a", y: "b" });
});
