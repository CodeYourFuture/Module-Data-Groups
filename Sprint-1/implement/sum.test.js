const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(sum([5])).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns correct total", () => {
  expect(sum([-1, -2, 3])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal numbers, returns correct total", () => {
  expect(sum([1.5, 2.5, 3])).toBe(7);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with mixed values, ignores non-numbers", () => {
  expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns 0", () => {
    expect(sum(['a','b','c'])).toBe(0);
});

test("given a null input, returns 0", () => {
  expect(sum(null)).toBe(0);
});

test("given an undefined input, returns 0", () => {
  expect(sum(undefined)).toBe(0);
});

test("given an object input, returns 0", () => {
  expect(sum({})).toBe(0);
});