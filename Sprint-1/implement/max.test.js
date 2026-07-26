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

  test("given an empty array, returns -Infinity", () => {
    expect(findMax.js([]).toEqual(-Infinity));
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  const testCaseArrayWithOneNumber = [
    { input: [4], expected: 4 },
    { input: [5], expected: 5 },
    { input: [10], expected: 10 },
  ];
  testCaseArrayWithOneNumber.forEach(({ input, expected }) => {
    test("given an array with one number, returns that number", () => {
      expect(findMax(input).toEqual(expected));
    });
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  const testCaseArrayWithPositiveAndNegativeNumbers = [
    { input: [-5, 3, -10, 8, 2, -1], expected: 8 },
    { input: [-20, 15, -3, 7, -100, 4], expected: 15 },
    { input: [-1, -50, 0.5, -2, -10], expected: 0.5 },
  ];
  testCaseArrayWithPositiveAndNegativeNumbers.forEach(({ input, expected }) => {
    test("given a mix of positive and negative number, returns the largest number overall", () => {
      expect(findMax(input).toEqual(expected));
    });
  });

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  const testCaseArrayWithOnlyNegativeNumbers = [
    { input: [-5, -3, -10, -8, -2, -1], expected: -1 },
    { input: [-20, -15, -3, -7, -100, -4], expected: -3 },
    { input: [-1, -50, -0.5, -2, -10], expected: -0.5 },
  ];

  testCaseArrayWithOnlyNegativeNumbers.forEach(({ input, expected }) => {
    test("given negative numbers, returns the closest number to zero", () => {
      expect(findMax(input).toEqual(expected));
    });
  });

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  const testCaseArrayWithOnlyDecimalNumbers = [
    { input: [1.5, 3.7, 2.4, 8.9, 4.2], expected: 8.9 },
    { input: [0.2, 0.8, 0.1, 0.6, 0.4], expected: 0.8 },
    { input: [-1.5, -3.2, -0.7, -5.6, -2.1], expected: -0.7 },
  ];
  testCaseArrayWithOnlyDecimalNumbers.forEach(({ input, expected }) => {
    test("given decimal numbers, returns the largets decimal number", () => {
      expect(findMax(input).toEqual(expected));
    });
  });

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  const testCaseArrayWithNonNumberValues = [
    { input: [5, "hello", 10, null, 3], expected: 10 },
    { input: ["world", -5, 8, undefined, 2], expected: 8 },
    { input: [true, 4, false, 12, "hey"], expected: 12 },
    { input: [-10, "hello", -2, null, -20], expected: -2 },
    { input: [2.5, {}, 7.8, [], "test"], expected: 7.8 },
  ];
  testCaseArrayWithNonNumberValues.forEach(({ input, expected }) => {
    test("given an array including non-numerical values, returns the max and ignore non-numeric values", () => {
      expect(findMax(input).toEqual(expected));
    });
  });

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs
  const testCaseArrayWithOnlyNonNumberValues = [
    { input: ["hello", "world"], expected: undefined },
    { input: [null, undefined, true, false], expected: undefined },
    { input: [{}, [], "test"], expected: undefined },
  ];
  testCaseArrayWithOnlyNonNumberValues.forEach(({ input, expected }) => {
    test("given an array with only non-number values, returns undefined", () => {
      expect(findMax(input).toEqual(expected));
    });
  });
});
