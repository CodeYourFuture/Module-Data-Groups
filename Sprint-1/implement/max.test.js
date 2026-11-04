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
test("given one element number in an array, returns that number", () => {
  expect(findMax([23])).toEqual(23);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("returns the largest number in an array", () => {
  expect(findMax([2, -4, 0, -3, 5])).toEqual(5);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("returns the closest number to zero in an array", () => {
  expect(findMax([-22, -4, -2, -3, -5])).toEqual(-2);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("returns the largest decimal number in an array", () => {
  expect(findMax([0.34, 6.3, 2.2, 7.1, 5.0])).toEqual(7.1);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("throws for an array mixing numbers and strings", () => {
  expect(() => findMax([2, -4, "hi", -3, 5])).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
test("throws when not given an array type", () => {
  expect(() => findMax("hey")).toThrow(
    new Error("findMax requires an array of numbers")
  );
});
