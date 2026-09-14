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
test("Given an array with just one number, return that number", () => {
  expect(sum([3])).toBe(3);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array with negative numbers, return the correct total", () => {
  expect(sum([-2, -4, -1])).toBe(-7);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([3.5, 6.1])).toBe(9.6);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("throws an error when given an array contains a non-number value", () => {
  expect(() => sum(["4", "Holla", 6, 9, 1])).toThrow(
    new Error("sum requires an array of numbers")
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("throws an error when given a non array value", () => {
  expect(() => sum([null, undefined, NaN, true])).toThrow(
    new Error("sum requires an array of numbers")
  );
});
