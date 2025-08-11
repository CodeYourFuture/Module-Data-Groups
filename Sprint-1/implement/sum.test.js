/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

// for clarity I have decided to group the test into describe blocks based on the expected output.

describe("Returns 0 for empty or non-numeric arrays", () => {
  [
    { input: [], expected: 0 },
    { input: ["hi", "hey", "hello", "yo"], expected: 0 },
    { input: [null, undefined], expected: 0 },
  ].forEach(({ input, expected }) =>
    test(`Given an array sum returns the correct value of 0 for empty or non-numeric arrays [${input}]`, () =>
      expect(sum(input)).toEqual(expected))
  );
});

describe("Returns the correct sum for arrays with numbers", () => {
  [
    { input: [10, 20, 30], expected: 60 },
    { input: [10], expected: 10 },
    { input: [-10, -20, -30], expected: -60 },
    { input: [1.5, 2.5, 3.5], expected: 7.5 },
    { input: [10, "hi", 20, "hello"], expected: 30 },
  ].forEach(({ input, expected }) =>
    test(`Given an array sum returns the correct sum for arrays with numbers [${input}]`, () =>
      expect(sum(input)).toEqual(expected))
  );
});
