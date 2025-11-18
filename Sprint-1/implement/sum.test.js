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
test("given one number, returns that number", () => {
  expect(sum([7])).toBe(7);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("sums negative numbers correctly", () => {
  expect(sum([-5, -10, 3])).toBe(-12);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("sums decimal numbers correctly", () => {
  expect(sum([1.5, 2.25, 3.25])).toBe(7);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("ignores non-number values and sums only numbers", () => {
  expect(sum(["hi", 10, "wow", 20, null, 5])).toBe(35);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given only non-number values, returns 0", () => {
  expect(sum(["a", {}, null, undefined])).toBe(0);
});
