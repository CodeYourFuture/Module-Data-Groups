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
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number, returns that number", () => {
  expect(sum([30])).toBe(30);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array containing negative numbers, return the correct total sum", () => {
  expect(sum([60,-10,-25,30])).toBe(55);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers, return the correct total sum", () => {
  expect(sum([22.5,15,40,3,5])).toBe(85.5);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values, return the sum of the numerical elements", () => {
  expect(sum(["Enter",30,"hi", 12])).toBe(42);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
  expect(sum(["nana","hey","welcome"])).toBe(0);
});