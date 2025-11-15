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
test("given an empty array, returns -Infinity", () =>
  expect(findMax([])).toEqual(-Infinity));

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, it should return the number", () =>
  expect(findMax([4])).toEqual(4));

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
describe("getting the largest number from an array of positive and negative numbers", () => {
  [
    { input: [1, -4, -80, 100, -120, 0, 55], expected: 100 },
    { input: [20, 0, -80, 1, -10, -8, 5], expected: 20 },
    { input: [0, -4, -80, -100, -120, 0, -55], expected: 0 },
    { input: [17, -9, -400, 81, 120, 2, 5.5], expected: 120 },
    { input: [-1, -4, -70, 1000, -190, 1456, 0.5], expected: 1456 },
  ].forEach(({ input, expected }) =>
    it(`returns the largest number overall`, () =>
      expect(findMax(input)).toBe(expected))
  );
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
describe("getting the largest number from an array of negative non-zero numbers", () => {
  [
    { input: [-15, -4, -80, -100, -120, -7, -55], expected: -4 },
    { input: [-20, -90, -800, -11, -19, -8, -23], expected: -8 },
    {
      input: [-890, -6734, -89230, -1780, -128, -863927, -9076],
      expected: -128,
    },
    {
      input: [-1789, -1098, -1400, -1891, -1620, -2623, -3558],
      expected: -1098,
    },
    {
      input: [-1893, -490365, -709, -1000, -1790, -91456, -708],
      expected: -708,
    },
  ].forEach(({ input, expected }) =>
    it(`returns the closest negative number to zero`, () =>
      expect(findMax(input)).toBe(expected))
  );
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
describe("getting the largest decimal number from an array of positive and negative numbers", () => {
  [
    { input: [1.5, -4.8, -80.87, 1.09, -1.2, 0.967, 5.95], expected: 5.95 },
    { input: [2.0, 9.7, -20.801, 21.7, -10.9, 3.768, 56.4], expected: 56.4 },
    { input: [0.345, 8.876, 9.56, 34.2, 32.4, 32.212, 31.989], expected: 34.2 },
    { input: [5.5, 7.685, 7.865, 7.6854, 7.6853, 7.6855], expected: 7.865 },
    { input: [-5.674, 9.1, 9.121, 9.122, 9.1221, 9.12213], expected: 9.12213 },
  ].forEach(({ input, expected }) =>
    it(`returns the largest number overall`, () =>
      expect(findMax(input)).toBe(expected))
  );
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
describe("returning the max number from array with numeric and non-numeric values", () => {
  [
    {
      input: [1.5, -4.8, "ten", 1.09, "fifty six", 0.967, "six"],
      expected: 1.5,
    },
    { input: ["twenty", "ben", "x-ray", 23, -10, "joe", 5], expected: 23 },
    { input: ["zero", -4, -80, -100, -120, 0, "tom"], expected: 0 },
  ].forEach(({ input, expected }) =>
    it(`returns the largest number ignoring non-numeric values`, () =>
      expect(findMax(input)).toEqual(expected))
  );
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
describe("returning the max number from array with numeric and non-numeric values", () => {
  [
    {
      input: ["dam", "meat", "ten", "faster", "fifty six", "loud", "mix"],
      expected: "ten",
    },
    {
      input: ["twenty", "ben", "x-ray", "king", "clive", "joe", "oxen"],
      expected: "x-ray",
    },
    {
      input: ["zero", "switch", "price", "tom", "max", "nick", "reach"],
      expected: "tom",
    },
  ].forEach(({ input, expected }) =>
    it(`returns the largest number ignoring non-numeric values`, () =>
      expect(findMax(input)).toEqual(expected))
  );
});
