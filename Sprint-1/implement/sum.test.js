/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]) throws Error("sum requires an array of numbers") (sum can't add non-numerical elements, so it shouldn't guess)
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
  expect(sum([7])).toBe(7);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with negative numbers, returns the correct total", () => {
  expect(sum([10, -4, -6])).toBe(0);
  expect(sum([-1, -2, -3])).toBe(-6);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal numbers, returns the correct total", () => {
  expect(sum([1.5, 2.5, 3])).toBe(7);
  expect(sum([0.1, 0.2])).toBeCloseTo(0.3);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("given an array with a non-number, throws an error", () => {
  expect(() => sum(["hey", 10, "hi", 60, 10])).toThrow(
    "sum requires an array of numbers"
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("given something that is not an array, throws an error", () => {
  expect(() => sum("hey")).toThrow("sum requires an array of numbers");
  expect(() => sum(42)).toThrow("sum requires an array of numbers");
  expect(() => sum()).toThrow("sum requires an array of numbers");
});

test("given an array containing NaN and Infinity, throws an error", () => {
  expect(() => sum([1, NaN, 3])).toThrow("sum requires an array of numbers");
  expect(() => sum([1, Infinity])).toThrow("sum requires an array of number");
  expect(() => sum([-Infinity, 1])).toThrow("sum requires an array of number");
});
