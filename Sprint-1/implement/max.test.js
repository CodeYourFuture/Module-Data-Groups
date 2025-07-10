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

describe("findMax function", () => {
  test("should return -Infinity for an empty array", () => {
    expect(findMax([])).toBe(-Infinity);
  });

  test("should return the number for an array with one number", () => {
    expect(findMax([42])).toBe(42);
    expect(findMax([5])).toBe(5);
  });

  test("should return the largest number for array with positive and negative numbers", () => {
    expect(findMax([30, -50, 10, 40, -20])).toBe(40);
    expect(findMax([19, 80, -11, 46, 7])).toBe(80);
  });

  test("should return the closest to zero for array with only negative numbers", () => {
    expect(findMax([-100, -50, -10, -1, -200])).toBe(-1);
    expect(findMax([-100, -50, -10, -999, -200])).toBe(-10);
  });

  test("should return the largest decimal number", () => {
    expect(findMax([1.5, 2.7, 0.3, 1.9])).toBe(2.7);
    expect(findMax([0.1, 1.2, 66.3, 7.4])).toBe(66.3);
  });

  test("should ignore non-numeric values and return max number", () => {
    expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60);
  });

  test("should return -Infinity for array with only non-number values", () => {
    expect(findMax(["hey", "hi", true, null, undefined])).toBe(-Infinity);
  });
});
