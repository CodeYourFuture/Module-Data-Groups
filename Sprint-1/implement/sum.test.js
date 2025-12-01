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
  it("return 0 when given an empty array", () => {
    expect(sum([])).toBe(0);
  });

  [
    { input: [0], expected: 0 },
    { input: [-12], expected: -12 },
    { input: [4], expected: 4 },
  ].forEach(({ input, expected }) =>
    it(`return the same number when the array has one element, for array[${input}] `, () =>
      expect(sum(input)).toBe(expected))
  );
  [
    { input: [10, 11, 13, 3, 4], expected: 41 },
    { input: [99, 3, 10, 11], expected: 123 },
    { input: [-12, -33, -10, -111], expected: -166 },
    { input: [-1, -11, -33], expected: -45 },
    { input: [-99, -2, 0, 0, -2], expected: -103 },
  ].forEach(({ input, expected }) =>
    it(`return the sum of numbers for array containing, positive, negative, or mixed values , for array [${input}]`, () =>
      expect(sum(input)).toBe(expected))
  );

  [
    { input: [11.1, 14.1, 17.223, 16], expected: 58.423 },
    { input: [11.1, 11.33, 11.34, 11.2999], expected: 45.0699 },
    { input: [1.2, 0.6, 0.005], expected: 1.805 },
  ].forEach(({ input, expected }) =>
    it(`returns the  sum for decimal values for array [${input}]`, () =>
      expect(sum(input)).toBeCloseTo(expected))
  );
  it("ignores non-numeric values and returns the sum of numeric ones", () => {
    expect(sum(["2", 2, null, undefined, 13, 18])).toBe(33);
  });
  it("returns 0 when no numeric values are present", () => {
    expect(sum(["a", "2", null, undefined, "ahmad", "Hmedan"])).toBe(0);
  });
});

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
