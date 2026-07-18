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
test("when empty array is given it should returns 0", () => {
  const elements = [];
  const result = sum(elements);
  expect(result).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("when array with just one number given it should returns that number", () => {
  const elements = [13];
  const result = sum(elements);
  expect(result).toEqual(13);
});
test("when array with just one number given it should returns that number", () => {
  const elements = [9];
  const result = sum(elements);
  expect(result).toEqual(9);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("when array with negative numbers given it should return the correct total sum", () => {
  const elements = [-9, -2, -4, -7];
  const result = sum(elements);
  expect(result).toEqual(-22);
});
test("when array with negative numbers given it should return the correct total sum", () => {
  const elements = [-11, -9, -2, -5];
  const result = sum(elements);
  expect(result).toEqual(-27);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("when array that contain decimal or float number pass to the function it should return the correct total sum", () => {
  const elements = [0.9, 1 / 2, 4.3, 3.7, 1 / 4];
  const result = sum(elements);
  expect(result).toEqual(9.649999999999999);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("when array that contain number and non-number pass to the function it should return the sum of the numerical elements", () => {
  const elements = [9, 1, 4, "one", 3, "two", 4];
  const result = sum(elements);
  expect(result).toEqual(21);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("when array that contain non-number pass to the function it should return undefined", () => {
  const elements = ["window", "one", "name", "two"];
  const result = sum(elements);
  expect(result).toEqual(undefined);
});
