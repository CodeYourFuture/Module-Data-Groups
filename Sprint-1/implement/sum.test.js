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
  const list = [];
  const currentOutput = sum(list);
  const targetOutput = 0;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  const list = [20];
  const currentOutput = sum(list);
  const targetOutput = 20;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers[-20, 30, -50] , returns the correct total sum ", () => {
  const list = [-20, 30, -50];
  const currentOutput = sum(list);
  const targetOutput = -40;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers [1.5, -2.4, 4.5], returns the correct total sum", () => {
  const list = [1.5, -2.4, 4.5];
  const currentOutput = sum(list);
  const targetOutput = 3.6;
  expect(currentOutput).toBeCloseTo(targetOutput);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-numerical value, ignore  none-numerical value, returns the sum of numerical elements", () => {
  const list = [-20, "hello", 30, "a"];
  const currentOutput = sum(list);
  const targetOutput = 10;
  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns the least surprising value based on the behavior of other inputs", () => {
  const list = ["a", "b", null, undefined];
  const currentOutput = sum(list);
  const targetOutput = 0;
  expect(currentOutput).toEqual(targetOutput);
});
