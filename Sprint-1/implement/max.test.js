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

test("should return -Infinity if given an empty array", () => {
  expect(findMax([])).toEqual(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("should return that number if given an array with one number", () => {
  expect(findMax([2])).toEqual(2);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("should return the largest number overall if given positive & negative numbers", () => {
  expect(findMax([-2, 4, -7, 9])).toEqual(9);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test("should return the one closest to zero if given only negative numbers", () => {
  expect(findMax([-2, -4, -7, -9])).toEqual(-2);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("should return the largest decimal number when only decimals were given", () => {
  expect(findMax([-2.5, 4.1, 3.2, 9.3])).toEqual(9.3);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")

test("should throw an error when at least one value is not a number", () => {
  expect(() => findMax([-2, "9", "sweet", 9])).toThrow(
    new Error("findMax requires for all items to be numbers")
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")

test("should throw an error when the data type isn't an array", () => {
  expect(() => findMax("ten", 1, "thirty")).toThrow(
    new Error("findMax requires for all items to be numbers")
  );
});
