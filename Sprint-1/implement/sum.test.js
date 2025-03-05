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
  const elements = [];
  const answer = sum(elements);
  expect(answer).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with just one number, the function should return just that number", () => {
  const elements = [56];
  const answer = sum(elements);
  expect(answer).toEqual(56);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("Given an array of negetive numbers, the function should return the correct sum", () => {
  const elements = [-2, -5, -9, -12];
  const answer = sum(elements);
  expect(answer).toEqual(-28);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array of decimal numbers, the function must return the correct sum", () => {
  const elements = [5.32, 6.59, 8.52, 7.2];
  const answer = sum(elements);
  expect(answer).toEqual(27.63);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array of non number values the function should ignore the values and return the sum of numerical elements", () => {
  const elements = [5, 6, 5, "monther", 5];
  const answer = sum(elements);
  expect(answer).toEqual(21);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with non number values ", () => {
  const elements = ["month", "dress", "cape town"];
  const answer = sum(elements);
  expect(answer).toEqual(0);
});
