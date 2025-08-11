/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
  test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given a one number [8] array, returns 8", () => {
  expect(findMax([8])).toBe(8);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given a positive and negative number, returns the largest one", () => {
     expect(findMax([0, -1 ,-5])).toBe(0);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given a negative numbers, returns teh closest to 0", () =>
{expect(findMax([-19, -40, -60])).toBe(-19)})

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given a decimal numbers, returns teh largest number", () =>
{expect(findMax([1.9, 4.1, 6.0])).toBe(6.0)})

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given a number and non-number values, returns numbers and ignore non numeric values", () =>
{expect(findMax(["cake", 40, -93])).toBe(40)})

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given only non-number values, returns -Infinity", () => {
  expect(findMax(["cake", "pie", null, undefined, {}, []])).toBe(-Infinity);
});