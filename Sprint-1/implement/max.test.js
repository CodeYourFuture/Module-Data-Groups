/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

//const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
//test.todo("given an empty array, returns -Infinity");

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

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

const findMax = require("./max.js");

describe("findMax", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  test("given an array with one number, returns that number", () => {
    expect(findMax([42])).toEqual(42);
  });

  test("given an array with both positive and negative numbers, returns the largest number", () => {
    expect(findMax([30, -50, 10, 40])).toEqual(40);
  });

  test("given an array with just negative numbers, returns the closest to zero", () => {
    expect(findMax([-10, -20, -3, -50])).toEqual(-3);
  });

  test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.5, 2.7, 0.2, 2.6])).toEqual(2.7);
  });

  test("given an array with non-number values, ignores non-numeric values", () => {
    expect(findMax(["hello", 10, "world", 60, 5])).toEqual(60);
  });

  test("given an array with only non-number values, returns -Infinity", () => {
    expect(findMax(["a", "b", "c", null, undefined])).toEqual(-Infinity);
  });

  test("given an array with [-Infinity], returns -Infinity", () => {
    expect(findMax([-Infinity])).toEqual(-Infinity);
  });

  test("given an array with [-Infinity, 0], returns 0", () => {
    expect(findMax([-Infinity, 0])).toEqual(0);
  });

  test("given an array with [NaN], returns -Infinity", () => {
    expect(findMax([NaN])).toEqual(-Infinity);
  });

  test("given an array with [0, NaN, 1], returns 1", () => {
    expect(findMax([0, NaN, 1])).toEqual(1);
  });
});
