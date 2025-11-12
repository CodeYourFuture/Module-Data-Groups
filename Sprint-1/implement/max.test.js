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
  it("return -Infinity when given an empty array", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  [
    { input: [0], expected: 0 },
    { input: [-12], expected: -12 },
    { input: [4], expected: 4 },
  ].forEach(({ input, expected }) =>
    it(`return the same number when the array has one element, for array[${input}] `, () =>
      expect(findMax(input)).toEqual(expected))
  );
  [
    { input: [10, 11, 13, 3, 4], expected: 13 },
    { input: [99, 3, 10, 11], expected: 99 },
    { input: [-12, -33, -10, -111], expected: -10 },
    { input: [-1, -11, -33], expected: -1 },
    { input: [-99, -2, 0, 0, -2], expected: 0 },
  ].forEach(({ input, expected }) =>
    it(`return the largest number for array containing, positive, negative, or mixed values , for array [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );
  [
    { input: [11.1, 14.1, 17.223, 16], expected: 17.223 },
    { input: [11.1, 11.33, 11.34, 11.2999], expected: 11.34 },
  ].forEach(({ input, expected }) =>
    it(`give an array with decimal numbers, return the largest decimal numbers for array [${input}]`, () =>
      expect(findMax(input)).toEqual(expected))
  );

  it(`given an array with non-number values , return the largest after ignore the no-number values for an array  input:["a",2,null,undefined,13,18]`, () => {
    expect(findMax(["a", 2, null, undefined, 13, 18])).toEqual(18);
  });
  it(`given an array with only non-number values , return -infinity`, () => {
    expect(findMax(["a", "2", null, undefined, "ahmad", "Hmedan"])).toEqual(
      -Infinity
    );
  });
});

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
