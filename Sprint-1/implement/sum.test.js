const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

test("given an array with one number, returns that number", () => {
  expect(sum([42])).toBe(42);
});

test("given an array with negative numbers, returns correct sum", () => {
  expect(sum([-1, -2, -3])).toBe(-6);
});

test("given an array with decimal numbers, returns correct sum", () => {
  expect(sum([0.1, 0.2])).toBeCloseTo(0.3);
});

test("ignores non-number values", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
});

test("given only non-number values, returns 0", () => {
  expect(sum(["a", "b", null])).toBe(0);
});
