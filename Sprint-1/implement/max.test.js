const findMax = require("./max.js");

test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

test("given an array with one number, returns that number", () => {
  expect(findMax([42])).toBe(42);
});

test("given an array with both positive and negative numbers, returns the largest number", () => {
  expect(findMax([-10, 0, 15, 5])).toBe(15);
});

test("given an array with just negative numbers, returns the closest one to zero", () => {
  expect(findMax([-100, -3, -50])).toBe(-3);
});

test("given an array with decimal numbers, returns the largest decimal number", () => {
  expect(findMax([1.5, 2.5, 2.49])).toBe(2.5);
});

test("given an array with non-number values, ignores them and returns the max", () => {
  expect(findMax(["a", 5, null, 10])).toBe(10);
});

test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["a", "b", null, undefined])).toBe(-Infinity);
});
