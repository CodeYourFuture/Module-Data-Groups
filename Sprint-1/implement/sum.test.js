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

test("given an array with one number, returns that number", () => {
  expect(sum([42])).toBe(42);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given an array containing negative numbers", () => {
  expect(sum([-5, -6, -1])).toBe(-12);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([2.75, -0.3, 0.0002])).toBeCloseTo(2.4502);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("given an array containing non-number values, ignore the non-numerical values and return the sum of the numerical elements", () => {
  expect(sum(["hello", 6, true, 14])).toBe(20);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("given an array with only non-number values, returns 0", () => {
  expect(sum(["hello", undefined, "today", true])).toBe(0);
});

// Given an array including NaN
// When passed to the sum function
// Then it should ignore the NaN value
test("given an array that include NaN returns correct answer", () => {
  expect(sum([7, 14, NaN])).toBe(21);
});
