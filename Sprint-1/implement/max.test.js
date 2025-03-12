/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test.todo("given an empty array, returns -Infinity");

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

const findMax = require("./max");

describe("findMax", () => {
  test("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toBe(-Infinity); // Test for empty array
  });

  test("given an array with one number, returns that number", () => {
    expect(findMax([10])).toBe(10); // Test with one positive number
    expect(findMax([-5])).toBe(-5); // Test with one negative number
  });

  test("given an array with both positive and negative numbers, returns the largest number", () => {
    expect(findMax([30, 50, 10, 40])).toBe(50); // Test with both positive numbers
    expect(findMax([10, -20, 5, -50])).toBe(10); // Test with both positive and negative numbers
  });

  test("given an array with just negative numbers, returns the closest one to zero", () => {
    expect(findMax([-5, -10, -20, -3])).toBe(-3); // Test with only negative numbers
  });

  test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([0.5, 1.5, -2.5, 0.2])).toBe(1.5); // Test with decimal numbers
    expect(findMax([1.1, 1.2, 1.3, 0.9])).toBe(1.3); // Test with other decimal numbers
  });

  test("given an array with non-number values, returns the max and ignores non-numeric values", () => {
    expect(findMax(["hey", 10, "hi", 60, 10])).toBe(60); // Test with mixed values (strings and numbers)
    expect(findMax([10, "hello", "world", 30, 50])).toBe(50); // Test with more mixed values
  });

  test("given an array with only non-number values, returns -Infinity", () => {
    expect(findMax(["hey", "hi", "hello", "world"])).toBe(-Infinity); // Test with only non-numeric values
  });
});
