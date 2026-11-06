const invert = require("./invert");

test("swaps the key and value of a single pair", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("swaps every pair when there are multiple pairs", () => {
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "a", 20: "b" });
});
