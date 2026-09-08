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

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")

test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

test("given an array with one number, returns that number", () => {
  expect(findMax([5])).toEqual(5);
});

test("given positive and negative numbers, returns the largest overall", () => {
  expect(findMax([43, 75, 21, -64, -97])).toEqual(75);
});

test("given only negative numbers, returns the one closest to zero", () => {
  expect(findMax([-64, -3, -97])).toEqual(-3);
});

test("given decimal numbers, returns the largest decimal", () => {
  expect(findMax([14.7, 1.43, 87.45, 6.432])).toEqual(87.45);
});

test("throws when the array contains a value that isn't a number", () => {
  expect(() => findMax(["hey", 10, "hi", 60, 10])).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("throws when given a string", () => {
  expect(() => findMax("hey")).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("throws when given a number", () => {
  expect(() => findMax(42)).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("throws when called with no argument", () => {
  expect(() => findMax()).toThrow(
    new Error("findMax requires an array of numbers")
  );
});
