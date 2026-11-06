const invert = require("./invert");

test("swaps the key and value of a single pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("swaps every pair when there are multiple pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});
