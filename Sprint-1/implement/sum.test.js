/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

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
  expect(sum([42])).toBe(42);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("sums arrays with negative numbers", () => {
  expect(sum([10, -5, -15, 20])).toBe(10);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("sums arrays with decimal numbers", () => {
  expect(sum([1.5, 2.25, 3.25])).toBeCloseTo(7.0);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("ignores non-number values", () => {
  expect(sum(["a", 10, null, 5, "7", undefined, NaN, 3])).toBe(18);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("array with only non-number values returns 0", () => {
  expect(sum(["x", null, undefined, "y"])).toBe(0);
});
