/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");


test("Given an empty array then it should return 0", () => {
  expect(sum([])).toBe(0);
});

test("Given an array with just one number then it should return hat number", () => {
  expect(sum([10])).toBe(10);
});

test("Given an array containing negative numbers then it should return the correct total sum", () => {
  expect(sum([-10])).toBe(-10);
});

test("Given an array with decimal/float numbers then it should return the correct total sum", () => {
  expect(sum([-1.5, 0])).toBe(-1.5);
});

test("Given an array containing non-number values then it should return the sum of the numerical elements", () => {
  expect(sum([-1.5, 0, 'jj', 'ji'])).toBe(-1.5);
});

test("Given an array containing only non-number values then it should return 0", () => {
  expect(sum(["jj", "ji"])).toBe(0);
});