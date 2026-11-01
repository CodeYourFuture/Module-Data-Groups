const calculateMean = require("./mean.js");

test("given [1, 2, 6], returns 3", () => {
  expect(calculateMean([1, 2, 6])).toBe(3);
});

test("returns the number for a single item array", () => {
  expect(calculateMean([8])).toBe(8);
});

test("handles negative and decimal numbers", () => {
  expect(calculateMean([-2, 4, 3.5])).toBeCloseTo(1.8333);
});

test("throws for an empty array", () => {
  expect(() => calculateMean([])).toThrow(
    new Error("calculateMean requires a non-empty array")
  );
});

test("throws when not given an array", () => {
  expect(() => calculateMean("banana")).toThrow(
    new Error("calculateMean requires an array of numbers")
  );
});

test("throws for an array containing a non-number", () => {
  expect(() => calculateMean([1, "2", 3])).toThrow(
    new Error("calculateMean requires an array of numbers")
  );
});
