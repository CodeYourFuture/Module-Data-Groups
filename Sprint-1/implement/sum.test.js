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
it("given an empty array, returns 0", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
it("given array with one number, returns that number", () => {
  expect(sum([6])).toEqual(6);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
it("given array with negative numbers, returns the correct sum", () => {
  expect(sum([6, -10, 3, 5])).toEqual(4);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
it("given array with decimal numbers, returns the correct sum", () => {
  expect(sum([6, 3.68, 3, 5])).toEqual(17.68);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
