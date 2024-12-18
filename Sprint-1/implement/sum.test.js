const sum = require("./sum.js");
/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
test("only number to add sum", () => {
  expect(sum([10, 20, 30])).toBe(60);
  expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
});
// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
// test.todo("given an empty array, returns 0");
test("empty array and return 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("one number and return that number", () => {
  expect(sum([3])).toBe(3);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("negative number and return correct total sum", () => {
  expect(sum([1, 2, 3, 4, -10])).toBe(0);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("add decimal float and return correct total", () => {
  expect(sum([1.1, 2.2, 3.3, 1, 2])).toBe(9.6);
});

//test floating number
test("test floating number", () => {
  expect(sum([1.1, 1.1, 1.1])).toBe(3.3);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("ignore non-numerical values and sum total", () => {
  expect(sum(["hello", "world", 1, 2, 3])).toBe(6);
  expect(sum(["hi", NaN, undefined, "hello", {}])).toBe(0);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("surprising values given to all inputs", () => {
  expect(sum(["hi", "hello", NaN, Infinity, 1, 2, 3])).toBe(Infinity);
  expect(sum([NaN, 1, 2])).toBe(3);
});
