/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
// sum.test.js
const sum = require("./sum.js");

test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

test("given an array with just one number, returns that number", () => {
  expect(sum([5])).toBe(5);
});

test("given an array containing negative numbers, returns the correct total sum", () => {
  expect(sum([10, -5, 3])).toBe(8);
});

test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([10.5, 5.5, 2.0])).toBe(18);
});

test("given an array containing non-number values, ignores them and returns the sum of numerical elements", () => {
  expect(sum(['hey', 10, 'hi', 60, 10])).toBe(80);
});

test("given an array with only non-number values, returns 0", () => {
  expect(sum(['hey', 'hi', 'hello'])).toBe(0);
});

test("sum of decimals should be correct", () => {
  const result = sum([1.1, 1.1, 1.1]);  // This gives something close to 3.3
  const expected = 3.3;  // The expected result
  const tolerance = 1e-10;  // Small tolerance for floating-point errors

  // Check if the difference is smaller than the tolerance
  expect(Math.abs(result - expected)).toBeLessThan(tolerance);
});



// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
