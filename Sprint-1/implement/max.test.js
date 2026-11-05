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
test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("Given an array with one number, should return thant number", () => {
  expect(findMax([10])).toEqual(10);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("Given an array with both positive and negative numbers, should return the largest number overall", () => {
  expect(findMax([30, -7, 1, 45, -70, 10, -10])).toEqual(45);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("Given an array with just negative numbers, should return the closest one to zero", () => {
  expect(findMax([-15, -10, -7, -20, -70])).toEqual(-7);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("Given an array with decimal numbers, should return the largest decimal number", () => {
  expect(findMax([3.5, 2.7, 1.9, 5.1])).toEqual(5.1);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("Throws an error when array contains a value that isn't a number", () => {
  expect(() => findMax(["plane", 10, "car", 60, 10])).toThrow(
    new Error("findMax requires an array of numbers")
  );
});
// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("Throws an error when the input is not an array at all", () => {
  expect(() => findMax("hey")).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("Throws an error when given a number", () => {
  expect(() => findMax(36)).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("Throws an error when called with no argument", () => {
  expect(() => findMax()).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("Throws an error when array contains NaN", () => {
  expect(() => findMax([1, NaN, 3])).toThrow(
    new Error("findMax requires an array of numbers")
  );
});
