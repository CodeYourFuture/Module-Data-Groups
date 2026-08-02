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
describe("sum", () => {
  it("returns infinity if input is an empty list", () => {
    expect(sum([])).toBe(0);
  });

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
  [[3], [1], [2], [50], [100], [1]].forEach((val) =>
    it(`returns the same number when array with one number is input (${val})`, () =>
      expect(sum(val)).toBe(val[0]))
  );

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
  [
    { input: [10, 20, 30], expected: 60 },
    { input: [5, -50], expected: -45 },
    { input: [-100, 200], expected: 100 },
    { input: [1, -1, -2, 2], expected: 0 },
  ].forEach(({ input, expected }) =>
    it(`returns the sum when array contains negative or positive numbers [${input}]`, () =>
      expect(sum(input)).toEqual(expected))
  );

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
  [
    { input: [1.1, 1.2], expected: 2.3 },
    { input: [-1.1, -2.4, 1.1], expected: -2.4 },
    { input: [-15.38, -3.2, -5.01, -10.0], expected: -33.59 },
  ].forEach(({ input, expected }) =>
    it(`returns the sum in array contains decimal number [${input}]`, () =>
      expect(sum(input)).toEqual(expected))
  );

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
  [
    { input: ["hey", 10, "hi", 60, 10], expected: 80 },
    { input: [9, "orange", 1], expected: 10 },
    { input: [-9, "3", "apple", 1], expected: -8 },
    { input: [9, "grape", "banana"], expected: 9 },
  ].forEach(({ input, expected }) =>
    it(`returns the sum in array contains decimal number [${input}]`, () =>
      expect(sum(input)).toEqual(expected))
  );

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
  [["hey", "hi"], ["apple"], ["banana", true]].forEach((input) =>
    it(`returns 0 when the array contains only non-number elements (${input})`, () =>
      expect(sum(input)).toBe(0))
  );
});
