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
test("Given an empty array Then it should return 0", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with one element it should return that number", () => {
  expect(sum([4])).toEqual(4);
  expect(sum([10000])).toEqual(10000);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given negitave numbers still sums correctly", () => {
  expect(sum([2, 3, -3])).toEqual(2);
  expect(sum([5, -3, -3])).toEqual(-1);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given a float number it still sums correctly", () => {
  expect(sum([4.2, 4.3])).toEqual(8.5);
  expect(sum([2.223, 5.345, 3.141])).toEqual(10.709);
  expect(sum([3.887, 2.1945, -3.5])).toEqual(2.5815);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given non-numerical values should ignore and sum the numbers", () => {
  expect(sum([4, "four", "fore", "iv", 4])).toEqual(8);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given only non-numerical values should return 0", () => {
  expect(sum(["tommorow", "and", "tommorow", "and", "tommorow"]));
});
