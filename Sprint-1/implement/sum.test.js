/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array


E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");


// Test for an empty array
test("Given an empty array, return 0", () => {
  expect(sum([])).toBe(0); // Expect 0
});

// Test for an array with only numbers
test("Given an array of numbers, return their sum", () => {
  expect(sum([10, 20, 30])).toBe(60);
});

// Test for an array with just one number
test("Given an array with numbers and strings, sum only the numbers", () => {
  expect(sum(["a", 10, "b", "c", "d"])).toBe(10);
});

// Test for an array with negative numbers
test("Given an array with numbers and strings, sum only the numbers", () => {
  expect(sum(["a", 10, "b", "c", "d"])).toBe(10);
});

// Test for an array with only non-numeric values
test("array containing negative numbers, return the correct total sum", () => {
  expect(sum(["hello", null, undefined, "world"])).toBe(0);
});

// Test for array with decimal/float numbers
test("array with decimal/float numbers, return the correct total sum", () => {
  expect(sum([3.5, 4.5, 5.5])).toBe(13.5);
});

// Test for array containing non-number values
test("array containing non-number values, ignore the non-numerical values and return the sum of the numerical elements", () => {
  expect(sum(["hello", null, undefined, "world"])).toBe(0);
});

// Test for array only non-number values
test("array only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
  expect(sum(["hello", null, undefined, "world"])).toBe(0);
});

test("array with decimal/float numbers, return the correct total sum", () => {
  const expected = 13.5;
  const result = sum([3.5, 4.5, 5.5]);
  const tolerance = 0.0001;
  expect(Math.abs(result - expected)).toBeLessThan(tolerance);
});

test("array with decimal/float numbers, return the correct total sum", () => {
  const expected = 3.3;
  const result = sum([1.1, 1.1, 1.1]);
  const tolerance = 0.0001;
  expect(Math.abs(result - expected)).toBeLessThan(tolerance);
});


// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
//test.todo("given an empty array, returns 0")

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
