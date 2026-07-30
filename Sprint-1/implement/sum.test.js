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
test("should return 0 for an empty array", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("should return the number for an array of that single number", () => {
  expect(sum([5])).toEqual(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("should return the correct sum even with negative numbers in the array", () => {
  expect(sum([-5, -2, -3, 5])).toEqual(-5);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("should correctly sum an array containing decimals", () => {
  expect(sum([2.3, 2.7])).toEqual(5);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("should ignore non-numbers and calculate the sum of the numbers in the array", () => {
  expect(sum([null, "", 5, 7, true, "ten"])).toEqual(12);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test("should return 0 for only non-number inputs", () => {
  expect(sum([null, "", true, "ten"])).toEqual(0);
});
