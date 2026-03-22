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
test("should return 0 when passed an empty array", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("should return the only number when passed an array with one number", () => {
  expect(sum([42])).toEqual(42);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("should return the correct total sum when passed an array containing negative numbers", () => {
  expect(sum([-10, 20, -5])).toEqual(5);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("should return the correct total sum when passed an array with decimal/float numbers", () => {
  expect(sum([1.5, 2.3, 0.8, 3.1])).toEqual(7.7);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("should ignore non-numerical values and return the sum of the numerical elements", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toEqual(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("should return 0 when passed an array with ONLY non-number values", () => {
  expect(sum(["hey", "hi", "hello"])).toEqual(0);
});
