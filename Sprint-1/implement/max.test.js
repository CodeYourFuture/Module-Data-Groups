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
// test.todo("given an empty array, returns -Infinity");
it("returns -Infinity for an empty array", () => {
  expect(findMax([])).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
it("returns 10 for a single positive number", () => {
  expect(findMax([10])).toBe(10);
});

it("returns the largest value in a positive-number array", () => {
  expect(findMax([10, 20, 5])).toBe(20);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
it("returns 200 for an array of positive and negative numbers", () => {
  expect(findMax([10, -10, 200, -15])).toEqual(200);
});

it("returns Infinity when Infinity is the largest value", () => {
  expect(findMax([10, Infinity, -15])).toBe(Infinity);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
it("returns -1 for an array of negative numbers", () => {
  expect(findMax([-1, -10, -200, -15, -30])).toEqual(-1);
});

it("returns the number for a single negative value", () => {
  expect(findMax([-10])).toBe(-10);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
it("returns 200.99 for an array of decimal numbers", () => {
  expect(findMax([1.5, 2.5, 200.99, 15.01, 30.1])).toBe(200.99);
});

// Given an array containing a value that isn't a number
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
it("throws for an array of strings", () => {
  expect(() => findMax(["Hello", "There", "Weekend"])).toThrow(
    "findMax requires an array of numbers"
  );
});

it("throws for an array mixing strings and numbers", () => {
  expect(() => findMax(["Hello", 10, 20])).toThrow(
    "findMax requires an array of numbers"
  );
});

// Given something that isn't an array at all, such as "hey", 42 or no argument
// When passed to the max function
// Then it should throw Error("findMax requires an array of numbers")
it("throws when the input is not an array", () => {
  expect(() => findMax("Hello")).toThrow(
    "findMax requires an array of numbers"
  );
});
