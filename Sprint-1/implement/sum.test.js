/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Ensure the input is an array
// If the input is not an array, throw an error
test("throws an error if the input is not an array", () => {
  const errorMessage = "Input must be an array";
  expect(() => sum(123)).toThrow(errorMessage);
  expect(() => sum("not an array")).toThrow(errorMessage);
  expect(() => sum({ key: "value" })).toThrow(errorMessage);
  expect(() => sum(null)).toThrow(errorMessage);
  expect(() => sum(undefined)).toThrow(errorMessage);
  expect(() => sum(true)).toThrow(errorMessage);
});

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(sum([42])).toBe(42);
  expect(sum([-7])).toBe(-7);
  expect(sum([0])).toBe(0);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns the correct sum", () => {
  expect(sum([10, -5, 15])).toBe(20);
  expect(sum([-10, -20, -30])).toBe(-60);
  expect(sum([5, -5, 0])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal numbers, returns the correct sum", () => {
  expect(sum([1.5, 2.5, 3.0])).toBeCloseTo(7.0);
  expect(sum([-1.5, -2.5, -3.0])).toBeCloseTo(-7.0);
  expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non-number values, ignores them and returns the sum of numbers", () => {
  expect(sum([10, "hello", 20, null, 30, undefined])).toBe(60);
  expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
  expect(sum([true, false, 5, 15])).toBe(20);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns 0", () => {
  expect(sum(["hello", null, undefined, true, false])).toBe(0);
  expect(sum([{}, [], "string", null])).toBe(0);
});
