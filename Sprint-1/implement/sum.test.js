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
test("given a one number array, returns the same number", () => {
  expect(sum([9])).toEqual(9);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given a negative number array, returns the sum", () => {
  expect(sum([-9, -3, -6])).toEqual(-18);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given a decimal numbers array, returns the sum", () => {
  expect(sum([1.9, 7.5, 4.91])).toBeCloseTo(14.31);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("given a non-numbers array, returns sum requires an array of numbers", () => {
  expect(() => sum(["apple", null ,3])).toThrow(
    new Error("sum requires an array of numbers")
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
