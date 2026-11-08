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
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, should return that number", () => {
  expect(sum([1])).toEqual(1);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers,should return the correct total sum", () => {
  expect(sum([-2, -4, -1])).toEqual(-7);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array wit decimal numbers, should return correct total sum", () => {
  expect(sum([3.1, 2.1, 8.8])).toEqual(14);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("given an array containing a value that is not a number, should throw Error(sum requires an array of numbers)", () => {
  expect(() => sum([NaN, 21])).toThrow("sum requires an array of numbers");
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("given something that isn't an array at all, should throw Error(sum requires an array of numbers)", () => {
  expect(() => sum(21)).toThrow("sum requires an array of numbers");
});

test("given something that isn't an array at all, should throw Error(sum requires an array of numbers)", () => {
  expect(() => sum("hello")).toThrow("sum requires an array of numbers");
});
test("given something that isn't an array at all, should throw Error(sum requires an array of numbers)", () => {
  expect(() => sum()).toThrow("sum requires an array of numbers");
});
