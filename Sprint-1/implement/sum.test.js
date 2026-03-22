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
test("Empty array should be returned Zero", () => {
  let elements = [];
  expect(sum(elements)).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given one number should be returned same as original", () => {
  let elements = [5];
  expect(sum(elements)).toEqual(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("negative number should return total with no effect", () => {
  let elements = [1, 3, -2];
  expect(sum(elements)).toEqual(2);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("decimal number should return the correct total", () => {
  let elements = [1, 2.3, 4.5, 6];
  expect(sum(elements)).toEqual(13.8);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("non-number values be ignored, function still should return total", () => {
  let elements = [1, 2, 3, "hi", "b"];
  expect(sum(elements)).toEqual(6);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("non-number values should return Infinity", () => {
  let elements = ["a", "d", "hi"];
  expect(sum(elements)).toEqual(0);
});
