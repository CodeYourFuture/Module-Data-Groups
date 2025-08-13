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
test("sum([]) should return 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("sum([5]) should return 5", () => {
  expect(sum([5])).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("sum([-5, -10, -15]) should return -30", () => {
  expect(sum([-5, -10, -15])).toBe(-30);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("sum([1.5, 2.5, 3.5]) should return 7.5", () => {
  expect(sum([1.5, 2.5, 3.5])).toBeCloseTo(7.5); // changed to use toBeCloseTo for floating point precision
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("sum(['hey', 10, 'hi', 60, 10]) should return 80", () => {
  expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("sum(['hey', 'hi']) should return 0", () => {
  expect(sum(['hey', 'hi'])).toBe(0);
});
