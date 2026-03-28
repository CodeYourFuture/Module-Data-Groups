/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

describe("sum()", () => {
  // Given an empty array
  // When passed to the sum function
  // Then it should return 0
  [{ input: [], expected: 0 }].forEach(({ input, expected }) =>
    it(`should return ${expected} for [${input}]`, () => {
      expect(sum(input)).toEqual(expected);
    })
  );

  // Given an array with just one number
  // When passed to the sum function
  // Then it should return that number

  [{ input: [30], expected: 30 }].forEach(({ input, expected }) =>
    it(`should return ${expected} for [${input}]`, () => {
      expect(sum(input)).toEqual(expected);
    })
  );

  // Given an array containing negative numbers
  // When passed to the sum function
  // Then it should still return the correct total sum

  [{ input: [-1, -3, -4, -11], expected: -19 }].forEach(({ input, expected }) =>
    it(`should return ${expected} for [${input}]`, () => {
      expect(sum(input)).toEqual(expected);
    })
  );

  // Given an array with decimal/float numbers
  // When passed to the sum function
  // Then it should return the correct total sum

  [{ input: [0.5, 0.2, 0.11, 0.89, 0.3], expected: 2 }].forEach(
    ({ input, expected }) =>
      it(`should return ${expected} for [${input}]`, () => {
        expect(sum(input)).toEqual(expected);
      })
  );

  // Given an array containing non-number values
  // When passed to the sum function
  // Then it should ignore the non-numerical values and return the sum of the numerical elements

  [
    {
      input: ["evan", 3, "mike", 20, 6, "", "/", undefined, null, 20],
      expected: 49,
    },
  ].forEach(({ input, expected }) =>
    it(`should return ${expected} for [${input}]`, () => {
      expect(sum(input)).toEqual(expected);
    })
  );

  // Given an array with only non-number values
  // When passed to the sum function
  // Then it should return the least surprising value given how it behaves for all other inputs
  [
    {
      input: ["evan", "mike", "", "/", undefined],
      expected: "invalid elements",
    },
  ].forEach(({ input, expected }) =>
    it(`should return ${expected} for [${input}]`, () => {
      expect(sum(input)).toEqual(expected);
    })
  );
});
