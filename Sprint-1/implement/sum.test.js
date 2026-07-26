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
  expect(sum([])).toBe();
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, return the number", () => {
  expect(sum([7])).toBe(7);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, return the correct sum total", () => {
  expect(sum([-1, -2, -3])).toBe(-6);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, return the correct sum total", () => {
  expect(sum([1.1, 1.2, 2.1])).toBeCloseTo(4.4);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, return correct sum total and ignore the non-numbers", () => {
  expect(sum(["we", 2, "are", 18])).toBe(20);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, return the least surprising value", () => {
  expect(sum(["the", "world"])).toBe(0);
});
