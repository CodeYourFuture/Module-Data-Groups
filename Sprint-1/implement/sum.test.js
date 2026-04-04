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
test("The function should return 0 when an empty array is passed", () => {
  expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("The function should return single value when single value array is passed", () => {
  expect(sum([7])).toEqual(7);
  expect(sum([14])).toEqual(14);
  expect(sum([0])).toEqual(0);
  expect(sum([100])).toEqual(100);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("The function should return the correct total value when negative number array is passed", () => {
  expect(sum([-7, -10, -33])).toEqual(-50);
  expect(sum([-6, -10, -18, -4])).toEqual(-38);
  expect(sum([-100, -10, -1, -20])).toEqual(-131);
  expect(sum([-12, -23, -34, -45, -56, -67])).toEqual(-237);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("The function should return the correct total value when decimal/float numbers array is passed", () => {
  expect(sum([7.8045, 1.273, 3.19])).toBeCloseTo(12.2675, 4);
  expect(sum([4.6, 1.8, 3.18, 5.4])).toBeCloseTo(14.98);
  expect(sum([11 / 12, 4 / 6, 1 / 2, 6 / 20])).toBeCloseTo(2.383333, 6);
  expect(sum([1 / 2, 2 / 3, 3 / 4, 4 / 5, 5 / 6, 6 / 7])).toBeCloseTo(
    4.407142857,
    9
  );
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("The function should return the correct total value when an array containing non-number values is passed", () => {
  expect(sum([7.8045, "two", 3.19])).toEqual(10.9945);
  expect(sum(["one", 1.8, 3.18, "zero"])).toEqual(4.98);
  expect(sum([1 / 12, 4 / 6, "Ahmed", 6 / 8])).toEqual(1.5);
  expect(sum(["one", "two", "three", "four", "five", 1 / 2])).toEqual(0.5);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("The function should return undefined when an array with only non-number values is passed", () => {
  expect(sum(["male", "two", "age"])).toEqual(undefined);
  expect(sum(["one", "zero"])).toEqual(undefined);
  expect(sum(["world", "apple", "Ahmed", "london"])).toEqual(undefined);
  expect(sum(["one", "two", "three", "four", "five"])).toEqual(undefined);
});
