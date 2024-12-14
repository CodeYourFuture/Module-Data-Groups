/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe("findMax", () => {
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
test("given an array with one numbers, returns that number", () => {
    expect(findMax([10])).toBe(10);
    expect(findMax([-5])).toBe(-5);
})

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
test("given an array with both positive and negative numbers, return the largest number", () => {
    expect(findMax([-5, 10, 50, 100, 2])).toBe(100);
    expect(findMax([2, 4, -8, 17, -20])).toBe(17);
});

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
test("given an array with just negative numbers, return the closest one to zero", () => {
    expect(findMax([-20, -30, -1, -10])).toBe(-1);
});

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([2.5, 7.8, 10.3, 1.9])).toBe(10.3);
});

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
test(
  "given an array with non-number values, return the max and ignore non-numeric values", () => {
    expect(findMax([45, "prati", 2, "hello world", 30, false])).toBe(45);
  }
);
  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs
test(
  "given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    expect(findMax(["hello", true, "world", null, undefined])).toBe(-Infinity);
  }
);
});