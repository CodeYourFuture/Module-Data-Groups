/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

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

test("given an array with just one number, returns that number", () => {
  expect(sum([11])).toBe(11);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given an array containing negative numbers, returns the correct total sum", () => {
  expect(sum([-10, -20, -30])).toBe(-60);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([5.4, 2.3, 4.3])).toBe(12.0);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("given an array containing non-number values, ignores non-numerical values and returns the sum of numerical elements", () => {
  expect(sum(["hello", 10, "world", 20, 30])).toBe(60);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

//The least surprising value should be 0, as there are no numeric values to sum.

test("given an array with only non-number values, returns 0", () => {
  expect(sum(["hello", "world", "hi", "there"])).toBe(0);
});
