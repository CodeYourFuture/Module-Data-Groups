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
test("the function should return -Infinity when an empty array is passed to the function", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("The function should return the original value when an array with one number is passed", () => {
  expect(findMax([17])).toBe(17);
  expect(findMax([8])).toBe(8);
  expect(findMax([4])).toBe(4);
});
// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("The function should return the max value when an Integers number array is passed", () => {
  expect(findMax([-3, -1, 0, 1, 3, 4, 6, 7])).toBe(7);
  expect(findMax([-17, -8, -5, 2, 3, 0, 1])).toBe(3);
  expect(findMax([-27, 18, -16, -9, 1, 7, 9])).toBe(18);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("The function should return the closest one to zero when an negative number array is passed", () => {
  expect(findMax([-3, -1, -4, -6, -7])).toBe(-1);
  expect(findMax([-17, -8, -5, -2, -3])).toBe(-2);
  expect(findMax([-27, -18, -32, -67, -78, -70])).toBe(-18);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("The function should return the closest one to zero when an negative number array is passed", () => {
  expect(findMax([3.5, 1.9, 5.4, 0.6, 3.7])).toBe(5.4);
  expect(findMax([1.7, 0.8, 2.532, 1.092, 0.3])).toBe(2.532);
  expect(findMax([0.27, 0.18, 0.32, 0.67, 0.78, 0.7])).toBe(0.78);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("The function should return the closest one to zero when an negative number array is passed", () => {
  expect(findMax([3.5, "Leeds", "London", 3.7])).toBe(3.7);
  expect(findMax(["italy", 0.8, 0.88, 0.89, "base"])).toBe(0.89);
  expect(findMax([0.27, "jerry", 0.32, "apple", 0.78, "fly"])).toBe(0.78);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("the function should return undefined when non-number value is passed", () => {
  expect(findMax(["Manchester", "Leeds", "London"])).toBe(undefined);
  expect(findMax(["orange", "apple", "banana"])).toBe(undefined);
});
