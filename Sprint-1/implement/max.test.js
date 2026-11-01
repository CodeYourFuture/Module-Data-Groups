/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]) throws Error("findMax requires an array of numbers") (max can't compare non-numerical elements, so it shouldn't guess)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("return -Infinity when given an Empty array", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("return the number when given one number", () => {
  expect(findMax([10])).toEqual(10);
  expect(findMax([1])).toEqual(1);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("return the largest number when given negative and posetive numbers", () => {
  expect(findMax([10, -10, -3, 4])).toEqual(10);
  expect(findMax([-10, 2, -5, 6, 9])).toEqual(9);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("returns closest one to zero when given array of negative numbers", () => {
  expect(findMax([-1, -5, -2, -10])).toEqual(-1);
  expect(findMax([-5, -10, -100, -20])).toEqual(-5);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("return the largest decimal number when given decimal numbers in an array", () => {
  expect(findMax([0.01, 0.02, 2.5, 2.9])).toEqual(2.9);
  expect(findMax([3.5, 2.5, 2.9])).toEqual(3.5);
  expect(findMax([10.1, 9, 3, 11])).toEqual(11);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("return error when given an array containg non number value", () => {
  expect(() => findMax(["a", "b", "c"])).toThrow(
    "findMax requaires an array of numbers"
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
