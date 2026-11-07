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
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});
// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(findMax([4])).toEqual(4);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, should returns the largest number overall", () => {
  expect(findMax([4, -2])).toEqual(4);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, should return the closest one to zero", () => {
  expect(findMax([-2, -54])).toEqual(-2);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, should return the largest decimal number", () => {
  expect(findMax([3.5, 10.8])).toEqual(10.8);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("throws an error when an array contains a non-number", () => {
  expect(() => findMax([10, "NaN", 22, NaN])).toThrow(
    "findMax requires an array of numbers"
  );
});
// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("throws an error when input is a string", () => {
  expect(() => findMax("hello")).toThrow(
    "findMax requires an array of numbers"
  );
});

test("throws an error when input is a number", () => {
  expect(() => findMax(42)).toThrow("findMax requires an array of numbers");
});

test("throws an error when no argument is provided", () => {
  expect(() => findMax()).toThrow("findMax requires an array of numbers");
});
