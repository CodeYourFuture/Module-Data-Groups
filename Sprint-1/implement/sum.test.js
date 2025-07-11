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
  let emptyArray = [];
  let result = sum(emptyArray)
  expect(result).toBe(0)
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, it should return that number", () => {
  let oneNumArray = [23];
  let result = sum(oneNumArray);
  expect(result).toBe(23);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers, it should still return the correct total sum", () => {
  expect(sum([-2, -4, -1])).toBe(-7);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

test("Given an array with decimal/float numbers, it should return the correct total sum", () => {
  expect(sum([2.5, 4.5, 1.1])).toBe(8.1);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values, return the sum of the numerical elements", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values, should return 0", () => {
  expect(sum(["apple", null, undefined, {}, []])).toBe(0);
});
