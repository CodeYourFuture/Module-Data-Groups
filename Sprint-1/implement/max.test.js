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
  it("if an empty array is passed to the the findMax function, -Infinity should be returned", () => {
    emptyArray = [];
    expect(findMax(emptyArray)).toEqual(-Infinity);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  [[1], [70], [0], [-25], [100129]].forEach((val) =>
    it(`When an array with only one number is passed i.e. [${val}], it should return that number`, () =>
      expect(findMax(val)).toEqual(val[0]))
  );

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  [
    { input: [12, -2, 4, 6, 0], expected: 12 },
    { input: [2, 5, 990, -4], expected: 990 },
    { input: [0, -1, -5], expected: 0 },
    { input: [0, -1, 300, 3], expected: 300 },
  ].forEach(({ input, expected }) =>
    it(`returns the max number from the array [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  [
    { input: [-4, -2, -1902, -2, -1], expected: -1 },
    { input: [-9088, -9087, -990788, -4888777], expected: -9087 },
    { input: [-1, -5], expected: -1 },
  ].forEach(({ input, expected }) =>
    it(`returns the max number from the array of negative numbers only [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  [
    { input: [-4.2, 2.8, -19.8009, 2.4, 1.5], expected: 2.8 },
    { input: [-90.88, 0.001, -990.788], expected: 0.001 },
    { input: [-1.11, -5.3], expected: -1.11 },
  ].forEach(({ input, expected }) =>
    it(`returns the max number from the array of decimal numbers [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  [
    { input: [-4, -2, "what is this", -1902, -2, "??", -1], expected: -1 },
    {
      input: [-9088, ".oi9e9", "1000000", -9087, 990788, -4888777],
      expected: 990788,
    },
    { input: [-1.11, "here", -5.233, "ignore me please"], expected: -1.11 },
  ].forEach(({ input, expected }) =>
    it(`returns the max number from the array of numbers and non-numbers values [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs

  /* Ans: If there is no number in the array than considering the behavior for the above inputs
   the least surprising value in return would be -Infinity as our array has zero elements which are numbers*/
  [
    {
      input: ["Not a number", "what is this", "least surprising", "??", "what"],
      expected: -Infinity,
    },
    {
      input: ["kkdkas", "Ahan!", "23"],
      expected: -Infinity,
    },
    {
      input: ["here", "Least surprising", "????", "vale is", "-Infinity"],
      expected: -Infinity,
    },
  ].forEach(({ input, expected }) =>
    it(`returns the least surprising value for only non-numbers array [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );
});
