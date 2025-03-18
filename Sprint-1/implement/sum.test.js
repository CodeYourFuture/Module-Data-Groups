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
test.todo("given an empty array, returns 0");
test(" given an empty array, return 0", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test(" given an array with one number, return that number", () => {
  expect(sum([2])).toEqual(2);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test(" given an array contain negative numbers, return correct total sum", () => {
  expect(sum([3, -4, 3, 4])).toEqual(6);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test(" given an array with decimal numbers, return correct total sum", () => {
  expect(sum([2.5, 6.7, 3.4])).toEqual(12.6);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test(" given an array with non-number values, return numerical elements and ignore non-numerical", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toEqual(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test(" given an array with only num-numbers, return correct total sum", () => {
  expect(sum(["hey", "hello", "hi"])).toEqual(0);
});
