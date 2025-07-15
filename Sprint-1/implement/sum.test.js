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
test("Given an empty array, when passed to the sum function, then it should return 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number, when passed to the sum function, then it should return that number", () => {
  expect(sum([1])).toBe(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array with containing negative numbers, when passed to the sum function, then it should return the correct total sum", () => {
  expect(sum([-1, -2, -3])).toBe(-6);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, when passed to the sum function, then it should return the correct total sum", () => {
  expect(sum([2.5,3.5,6.1])).toBe(12.1);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values, when passed to the sum function, Then it should ignore the non-numerical values and return the sum of the numerical elements", () => {
  expect(sum([1, "apple", 2, true, null, 3, undefined, {}, 4])).toBe(10);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values, when passed to the sum function, Then it should return the least surprising value given how it behaves for all other inputss", () => {
  expect(sum(["text", true, null, undefined])).toBe(0);
});