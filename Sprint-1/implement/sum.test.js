/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");
describe("sum.js", () => {
  test.each([
    // Acceptance Criteria:

    // Given an empty array
    // When passed to the sum function
    // Then it should return 0

    { input: [], expected: 0 },

    // Given an array with just one number
    // When passed to the sum function
    // Then it should return that number

    { input: [1], expected: 1 },

    // Given an array containing negative numbers
    // When passed to the sum function
    // Then it should still return the correct total sum

    { input: [-2, 3, 4, -6], expected: -1 },
    { input: [4, -2], expected: 2 },

    // Given an array with decimal/float numbers
    // When passed to the sum function
    // Then it should return the correct total sum

    { input: [2.3, 4.2, 3.5], expected: 10 },
    { input: [4, 1.5], expected: 5.5 },

    // Given an array containing non-number values
    // When passed to the sum function
    // Then it should ignore the non-numerical values and return the sum of the numerical elements

    { input: ["a", 2, 5, "b"], expected: 7 },

    // Given an array with only non-number values
    // When passed to the sum function
    // Then it should return the least surprising value given how it behaves for all other inputs

    { input: ["a", "n", "p"], expected: "Invalid Input" },
  ])("sums all numbers from $input", ({ input, expected }) => {
    expect(sum(input)).toEqual(expected);
  });
});
