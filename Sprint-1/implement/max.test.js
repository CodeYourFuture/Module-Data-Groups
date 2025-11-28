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
test("given an array with one number, returns that number", () => {
  expect(findMax([8])).toBe(8);
  expect(findMax([-42])).toBe(-42);
  expect(findMax([0])).toBe(0);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns the largest number overall", () => {
  expect(findMax([10, -5, 20, 0])).toBe(20);
  expect(findMax([-1, -100, -50, 30])).toBe(30);
  expect(findMax([0, -10, 5])).toBe(5);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, returns the closest one to zero", () => {
  expect(findMax([-10, -5, -20])).toBe(-5);
  expect(findMax([-100, -50, -60])).toBe(-50);
  expect(findMax([-1000, -60, -1])).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
  expect(findMax([1.1, 2.5, 0.3])).toBe(2.5);
  expect(findMax([-1.2, -0.5, -0.1])).toBe(-0.1);
  expect(findMax([-1000.23, -80.54, -63.110])).toBe(-63.110);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max and ignore the non-numeric values", () => {
  expect(findMax([10, "hi", 20, null])).toBe(20);
  expect(findMax([0, false, 5, "a"])).toBe(5);
  expect(findMax([undefined, 5, null, NaN, -9])).toBe(5);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values", () => {
  expect(findMax(["a", null, undefined])).toBe(-Infinity);
  expect(findMax([{}, [], "hi"])).toBe(-Infinity);
  expect(findMax([true, false, true])).toBe(-Infinity);
  expect(findMax([Symbol("x"), () => {}, function () {}])).toBe(-Infinity);
});

// Edge cases
// Given an array with non-array values
// when passed to the max function
// Then it should throw and error
test("given a non-array input, throws a TypeError with message 'Input must be an array'", () => {
  expect(() => findMax(42)).toThrow(new TypeError("Input must be an array"));
  expect(() => findMax("hello")).toThrow(
    new TypeError("Input must be an array")
  );
  expect(() => findMax(null)).toThrow(new TypeError("Input must be an array"));
  expect(() => findMax(undefined)).toThrow(
    new TypeError("Input must be an array")
  );
});