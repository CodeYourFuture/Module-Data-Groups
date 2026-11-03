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
it("returns 0 when given an empty array", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
it("returns same number when given an array with just one number", () => {
  expect(sum([5])).toEqual(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
it("returns total when given an array with negative numbers", () => {
  expect(sum([-5, -2, -10])).toEqual(-17);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
it("returns total when given an array with decimal/float numbers", () => {
  expect(sum([2.6, 4.6, 8.12])).toEqual(15.32);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
