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
describe("findMax", () => {
  it("returns infinity if input is an empty list", () => {
    expect(findMax([])).toBe(-Infinity);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  [[3], [1], [2], [50], [100], [1]].forEach((val) =>
    it(`returns the same number when array with one number is input (${val})`, () =>
      expect(findMax(val)).toBe(val[0]))
  );

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  [
    { input: [30, 50, 10, 40], expected: 50 },
    { input: [5, -50], expected: 5 },
    { input: [-1, 2, 200], expected: 200 },
    { input: [5, -3, -5, -10], expected: 5 },
  ].forEach(({ input, expected }) =>
    it(`returns the maximum number when array contains negative or positive numbers [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  [
    { input: [-3, -6], expected: -3 },
    { input: [-500, -50], expected: -50 },
    { input: [-1, -2, -3, -4], expected: -1 },
  ].forEach(({ input, expected }) =>
    it(`returns the closest number to zero when array contains only negative numbers [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  [
    { input: [3.1, 3.2], expected: 3.2 },
    { input: [5.1, 50.7, 2.3], expected: 50.7 },
    { input: [-1.1, -2.4, 2], expected: 2 },
    { input: [-15.38, -3.2, -5.01, -10.0], expected: -3.2 },
  ].forEach(({ input, expected }) =>
    it(`returns the maximum number in array contains decimal number [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  [
    { input: ["hey", 10, "hi", 60, 10], expected: 60 },
    { input: [9, "orange", 1], expected: 9 },
    { input: [-9, "3", "apple", 1], expected: 1 },
    { input: [9, "grape", "banana"], expected: 9 },
  ].forEach(({ input, expected }) =>
    it(`returns the maximum number when array contains non-number elements and numbers [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs
  [["hey", "hi"], ["apple"], ["banana", true]].forEach((input) =>
    it(`returns -Infinity when the array contains only non-number elements (${input})`, () =>
      expect(findMax(input)).toBe(-Infinity))
  );
});
