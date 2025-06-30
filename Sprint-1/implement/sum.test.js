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
test("given a test with one number, it should return that number", () => {
  expect(sum([1])).toBe(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, it should return correct total sum", () => {
  expect(sum([-2, -5, -7, -1, 6, 4])).toBe(-5);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given array with decimal/float numbers, it should return the correct sum", () => {
  expect(sum([2.3, 3.4, 5.5, 1.9])).toBe(13.1);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, it should ignore the non-number values and return the sum of numerical values ", () => {
  expect(sum([null, 2, 5, 10, "?", "one"])).toBe(17);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test(" given an array with only non-number values, it should return the least surprising value", () => {
  expect(sum([null, {}, "pen", "@"])).toBe(0);
});
