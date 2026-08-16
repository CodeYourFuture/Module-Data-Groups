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
  expect(sum(emptyArray)).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with 1 number value, returns that number value", () => {
  let mixArray = ["1", "Hello", 20, null, undefined];
  expect(sum(mixArray)).toBe(20);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array with 1 number value, returns that number value", () => {
  let negativeArray = [-1, -20, -30, -50, -60];
  expect(sum(negativeArray)).toBe(-161);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with 1 number value, returns that number value", () => {
  let negativeArray = [1.5, 20.3, 50.43, 6.7, 10.5];
  expect(sum(negativeArray)).toBeCloseTo(89.43,2);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with 1 number value, returns that number value", () => {
  let mixedArray2 = ["Hello", 20.17, null, 9.7, undefined];
  expect(sum(mixedArray2)).toBe(29.87);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with 1 number value, returns that number value", () => {
  let nonNumberArray = ["Hello", "2", null, "@", undefined];
  expect(sum(nonNumberArray)).toBe(null);
});
