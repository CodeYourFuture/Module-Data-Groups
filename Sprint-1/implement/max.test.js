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


describe("findMax function", () => {
  test("should return the maximum number in an array of positive numbers", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test("should return the maximum number in an array with negative numbers", () => {
    expect(findMax([-10, -3, -50, -1])).toBe(-1);
  });

  test("should handle arrays with mixed types and ignore non-numbers", () => {
    expect(findMax([1, "apple", 5, null, true, 3])).toBe(5);
  });

  test("should ignore NaN values", () => {
    expect(findMax([1, NaN, 10, 2])).toBe(10);
  });

  test("should return -Infinity if given an empty array", () => {
    expect(findMax([])).toBe(-Infinity);
  });

  test("should return -Infinity if given an array with no valid numbers", () => {
    expect(findMax(["a", "b", null, NaN])).toBe(-Infinity);
  });

  test("should return -Infinity for non-array inputs", () => {
    expect(findMax(null)).toBe(-Infinity);
    expect(findMax(undefined)).toBe(-Infinity);
    expect(findMax("hello")).toBe(-Infinity);
  });
});