const invert = require("./invert");

test("swaps the key and value of a single pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("swaps every pair when there are multiple pairs", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("returns an empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});
