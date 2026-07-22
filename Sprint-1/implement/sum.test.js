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
  expect(sum([54])).toBe(54);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns the correct total sum", () => {
  expect(sum([-25, -100, 75])).toBe(-50);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([1.5, 2.5, 3.1])).toBe(7.1);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non-number values, returns the sum of the numerical elements", () => {
  expect(sum(["yoyo", 32, 10, "aha"])).toBe(42);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-numeric values, returns 0", () => {
  expect(sum(["£", "&", null, undefined, "abc"])).toBe(0);
});
