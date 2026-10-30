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
test("Given an empty array, should return 0", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number, should return that number", () => {
  expect(sum([10])).toEqual(10);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers, should still return the correct total sum", () => {
  expect(sum([-3, -7, -2])).toEqual(-12);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, should return the correct total sum", () => {
  expect(sum([1.3, 2.7, 3.5])).toEqual(7.5);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("Throws an error when an array containing a value that isn't a number", () => {
  expect(() => sum([15, "car", 11])).toThrow(
    new Error("sum requires an array of numbers")
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("Throws an error when given something that isn't an array at all", () => {
  expect(() => sum("string")).toThrow(
    new Error("sum requires an array of numbers")
  );
});

