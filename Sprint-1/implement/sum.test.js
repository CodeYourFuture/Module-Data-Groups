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
test("given an empty array, returns 0", () => expect(sum([])).toBe(0));

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns the number", () =>
  expect(sum([8])).toBe(8));

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
describe("returning total sum of negative numbers", () => {
  [
    { input: [-1, -5, -45, -32, -23, -17, -26], expected: -149 },
    { input: [-34, -1, -10, -7, -15, -11, -80], expected: -158 },
    { input: [-1000, -500, -450, -320, -2300, -170, -260], expected: -5000 },
  ].forEach(({ input, expected }) =>
    it(`should return correct total sum from array of negative numbers`, () =>
      expect(sum(input)).toBe(expected))
  );
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
describe("returning sum of float numbers", () => {
  [
    {
      input: [-1.6, -5.765, -4.512, 32.7, 23.9, 1.97, 2.36],
      expected: 49.053,
    },
    {
      input: [-34.6, 1.87, 10.67, -7.984, 15.5, -1.1, 8.0],
      expected: -7.644,
    },
    {
      input: [-10.01, 5.005, 4.5, 3.2, -230.09, 170.76, 260.4],
      expected: 203.765,
    },
  ].forEach(({ input, expected }) =>
    it(`should return correct total sum from array of decimal/float numbers`, () =>
      expect(sum(input)).toBe(expected))
  );
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
describe("returning total sum of numbers from an array with a mix of numbers and non-number values", () => {
  [
    { input: [-1, 5, "grumpy", -32, 23, "seventeen", 6], expected: 1 },
    {
      input: ["richard", "calculus", 10, -7, 15, 11, "tremulous"],
      expected: 29,
    },
    {
      input: [1000, -500, 450, "number", "joe", -170, "glitch"],
      expected: 780,
    },
  ].forEach(({ input, expected }) =>
    it(`should return correct total sum of number values only`, () =>
      expect(sum(input)).toBe(expected))
  );
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
describe("returning least surprising value based on behavior for non-number values ", () => {
  [
    {
      input: ["Hi ", "jim ", "what ", "are you ", "doing", "?"],
      expected: "Hi jim what are you doing?",
    },
    {
      input: ["the ", "quick ", "brown ", "fox ", "jumped"],
      expected: "the quick brown fox jumped",
    },
    { input: [-1000, -500, -450, -320, -2300, -170, -260], expected: -5000 },
  ].forEach(({ input, expected }) =>
    it(`should return the least surprising value based on the inputs`, () =>
      expect(sum(input)).toBe(expected))
  );
});
