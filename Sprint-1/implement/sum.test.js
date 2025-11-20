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

test("given one number, return that number", () => {
  expect(sum([10])).toBe(10);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given negative numbers, returns correct total", () => {
  expect(sum([-5, -10, 5])).toBe(-10);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("given float/decimal numbers, returns correct total", () => {
  expect(sum([1.5, 2.5, 3])).toBe(7);
});
test("sums decimal numbers with floating point safely", () => {
  const result = sum([1.2, 0.6, 0.005]);
  expect(result).toBeCloseTo(1.805);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("ignore non-number values and sum only numbers", () => {
  expect(sum(["hello", 10, "hi", 60, 10])).toBe(80);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs


test("array with only non-number values returns 0", () => {
  expect(sum(["a", "b", {}, [], "hello"])).toBe(0);
});

