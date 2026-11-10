/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]) throws Error("findMax requires an array of numbers") (max can't compare non-numerical elements, so it shouldn't guess)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

test("given an empty array, returns -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

test("given an array with one number, returns that number", () => {
  expect(findMax([10])).toEqual(10);
});

test("given an array with positive and negative numbers, returns largest number overall", () => {
  expect(findMax([10, 58, -74, 984, -87, -995, 47])).toEqual(984);
});

test("given an array with only negative numbers, returns number closest to zero", () => {
  expect(findMax([-58, -65, -7, -2, -96, -753])).toEqual(-2);
});

test("given an array with decimal numbers, returns largest decimal number", () => {
  expect(findMax([10, 9.5, 65.6, 41, 36.8])).toEqual(65.6);
});

test("given an array with with value that isn't a number, throws error", () => {
  expect(() => findMax([10, 23, 18, "hello", 89, 2])).toThrow(
    new Error("findMax requires an array of numbers")
  );
});

test("given something that isn't an array, throws error", () => {
  expect(() => findMax("Hello")).toThrow(
    new Error("findMax requires an array of numbers")
  );
});
