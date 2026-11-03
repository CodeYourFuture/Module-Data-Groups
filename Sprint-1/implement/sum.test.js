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
test("should return the same number when given one number", () => {
  expect(sum([3])).toEqual(3);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("should return correct sum when given negative numbers", () => {
  expect(sum([5, -4, 1, 9])).toEqual(11);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("should return a correct total sum when given decimal/float numbers", () => {
  expect(sum([2.2, 1, 4.1])).toEqual(7.3);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("should throw an error when passing non-number values", () => {
  expect(() => sum([8, -3, ""])).toThrow(
    new Error("sum requires an array of numbers")
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("should throw an error when passing non-array data types", () => {
  expect(() => sum("three", {})).toThrow(
    new Error("sum requires an array of numbers")
  );
});
