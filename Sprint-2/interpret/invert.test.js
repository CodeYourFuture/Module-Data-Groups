const invert = require("./invert.js");

test("swaps key with values", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("handles single entry", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("handles an empty object", () => {
  expect(invert({})).toEqual({});
});
