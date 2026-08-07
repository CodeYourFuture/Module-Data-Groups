/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  expect(sum([])).toEqual(0);
});

test("given an array with just one number, returns that number", () => {
  expect(sum([42])).toEqual(42);
});

test("given an array containing negative numbers, returns the correct total", () => {
  expect(sum([10, -5, 3])).toEqual(8);
});

test("given an array with decimal numbers, returns the correct total", () => {
  expect(sum([1.5, 2.5])).toEqual(4);
});

test("given an array containing non-number values, ignores them and sums the rest", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toEqual(80);
});

test("given an array with only non-number values, returns 0", () => {
  expect(sum(["a", "b"])).toEqual(0);
});
