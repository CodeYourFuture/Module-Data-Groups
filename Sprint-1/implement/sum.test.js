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
test.todo("given an empty array, returns 0");

test("Given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with one number, returns that number", () => {
  expect(sum([42])).toBe(42);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers, it should still return the correct total sum", () => {
  expect(sum([-4, -5, -1, 0])).toBe(-10);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, it should return the correct total sum", () => {
  expect(sum([4.5, 5.4, 5.6, 10.3])).toBeCloseTo(25.8);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values,it should ignore the non-numerical values and return the sum of the numerical elements", () => {
  expect(sum([10, "hello", null, 20, undefined, "42", 30, {}, [], true])).toBe(
    60
  );
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values, Given an array with only non-number values ", () => {
  expect(sum(["hello", null, undefined, "42", {}, [], true, false, NaN])).toBe(
    0
  );
});
