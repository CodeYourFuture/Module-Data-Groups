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
test("should return 0 when given an empty array", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("should return the number when given one number", () => {
  expect(sum([10])).toEqual(10);
  expect(sum([-1])).toEqual(-1);
  expect(sum([0])).toEqual(0);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("should return the number when given negative numbers ", () => {
  expect(sum([10, -4, 5, 7])).toEqual(18);
  expect(sum([-3, -4, -6, -9])).toEqual(-22);
  expect(sum([7, -9, 2, 1])).toEqual(1);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("should return the number when given decimal number", () => {
  expect(sum([2.5, 3.4, 5.7, 2])).toEqual(13.6);
  expect(sum([1, 1.5, 2.5, 6.3])).toEqual(11.3);
  expect(sum([2.3, 2.7, 7.4, 5.5])).toEqual(17.9);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("should throw an error when argument is passed that is non number", () => {
  expect(() => sum([1, 2, "hi", 3, "hey"])).toThrow(
    "sum requires an array of numbers"
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
