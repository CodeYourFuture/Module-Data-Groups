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

// Given a non-array value
// When passed to the sum function
// Then it should return null
test("Given a non-array value, when passed to the sum function, then it should return null", () => {
  expect(sum("not an array")).toBeNull();
  expect(sum(123)).toBeNull();
  expect(sum({})).toBeNull();
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number, when passed to the sum function, then it should return that number", () => {
  expect(sum([42])).toBe(42);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers, when passed to the sum function, then it should still return the correct total sum", () => {
  expect(sum([-10, -20, -30])).toBe(-60);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, when passed to the sum function, then it should return the correct total sum", () => {
  expect(sum([1.5, 2.3, 0.8, 3.1])).toBeCloseTo(7.7, 10);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values, when passed to the sum function, then it should ignore the non-numerical values and return the sum of the numerical elements", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values, when passed to the sum function, then it should return 0", () => {
  expect(sum(["hey", "hi", "hello"])).toBe(0);
});
