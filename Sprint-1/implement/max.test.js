const findMax = require("./max.js");

test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

test("given an array with one number, returns that number", () => {
  expect(findMax([7])).toBe(7);
});

test("given positive and negative numbers, returns the largest", () => {
  expect(findMax([-5, 3, -1, 10, 2])).toBe(10);
});

test("given only negative numbers, returns the closest to zero", () => {
  expect(findMax([-10, -3, -7])).toBe(-3);
});

test("given decimal numbers, returns the largest decimal", () => {
  expect(findMax([1.5, 2.7, 0.3])).toBe(2.7);
});

test("ignores non-number values", () => {
  expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);
});

test("given only non-number values, returns -Infinity", () => {
  expect(findMax(["a", "b"])).toBe(-Infinity);
});
