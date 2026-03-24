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
describe("findMax.js", () => {
  test.each([
    { input: [], expected: -Infinity },
    // Given an array with one number
    // When passed to the max function
    // Then it should return that number

    { input: [1], expected: 1 },

    // Given an array with both positive and negative numbers
    // When passed to the max function
    // Then it should return the largest number overall

    { input: [1, 2, -3], expected: 2 },

    // Given an array with just negative numbers
    // When passed to the max function
    // Then it should return the closest one to zero

    { input: [-6, -2, -3], expected: -2 },

    // Given an array with decimal numbers
    // When passed to the max function
    // Then it should return the largest decimal number

    { input: [3.5, 2.9, 6.3], expected: 6.3 },

    // Given an array with non-number values
    // When passed to the max function
    // Then it should return the max and ignore non-numeric values

    { input: ["a", 2, 3], expected: 3 },

    // Given an array with only non-number values
    // When passed to the max function
    // Then it should return the least surprising value given how it behaves for all other inputs

    { input: ["a", "!", "x"], expected: "Invalid Input" },
  ])("returns correct max for %o", ({ input, expected }) => {
    expect(findMax(input)).toBe(expected);
  });
});
