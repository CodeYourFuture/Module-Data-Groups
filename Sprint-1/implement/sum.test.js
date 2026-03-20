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
test("returns the same number when an array has just 1 number", () => {
  expect(sum([8])).toBe(8);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns correct sum", () => {
  expect(sum([-50, -20, 10])).toBe(-60);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns correct sum", () => {
  expect(sum([2.8, 4.2, 7.7])).toBeCloseTo(14.7);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non number values, returns sum of numbers", () => {
  expect(sum(["quiet", -20, "good", 10, 25])).toBe(15);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("returns 0 foe non number values", () => {
  expect(sum(["sally", "cousin", "hi", "a"])).toBe(0);
});
