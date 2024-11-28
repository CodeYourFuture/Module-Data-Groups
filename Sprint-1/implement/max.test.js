const findMax = require("./max.js");

// Test: Given an empty array, returns -Infinity
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Test: Given an array with one number, returns that number
test("given an array with one number, returns that number", () => {
  expect(findMax([42])).toBe(42);
});

// Test: Given an array with both positive and negative numbers, returns the largest number overall
test("given an array with both positive and negative numbers, returns the largest number overall", () => {
  expect(findMax([-10, 20, 0, 50, -30])).toBe(50);
});

// Test: Given an array with just negative numbers, returns the closest one to zero
test("given an array with just negative numbers, returns the closest one to zero", () => {
  expect(findMax([-10, -20, -5, -50])).toBe(-5);
});

// Test: Given an array with decimal numbers, returns the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
  expect(findMax([1.5, 2.3, 0.1, 3.7])).toBe(3.7);
});

// Test: Given an array with non-number values, ignores non-numeric values and returns the max
test("given an array with non-number values, ignores non-numeric values and returns the max", () => {
  expect(findMax(["hello", 10, true, 50, null, 20])).toBe(50);
});

// Test: Given an array with only non-number values, returns -Infinity
test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["hello", true, null, undefined])).toBe(-Infinity);
});

