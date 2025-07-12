const invert = require("./invert.js");

test("invert swaps keys and values for single pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("invert swaps keys and values for multiple pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  expect(invert({ x: 10, y: 20 })).toEqual({ "10": "x", "20": "y" });
});

test("invert works with string values", () => {
  expect(invert({ a: "apple", b: "banana" })).toEqual({ apple: "a", banana: "b" });
});

test("invert returns empty object for empty input", () => {
  expect(invert({})).toEqual({});
});
