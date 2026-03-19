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
describe("findMax()", () => {
  [{ input: [], expected: Infinity }].forEach(({ input, expected }) =>
    it(`should return ${expected} for empty [${input}]`, () => {
      expect(findMax(input)).toEqual(expected);
    })
  );

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number

  [{ input: [50], expected: 50 }].forEach(({ input, expected }) =>
    it(`should return ${expected} for array [${input}]`, () => {
      expect(findMax(input)).toEqual(expected);
    })
  );

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall

  [{ input: [2, 5, 6, -1, 0, 25, -30], expected: 25 }].forEach(
    ({ input, expected }) => {
      it(`should return ${expected} for positive and negative numbers in the array`, () => {
        expect(findMax(input)).toEqual(expected);
      });
    }
  );

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  [{ input: [-1, -10, -7, -20], expected: -1 }].forEach(({ input, expected }) =>
    it(`should return negative number nearest to zero`, () => {
      expect(findMax(input)).toEqual(expected);
    })
  );

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number

  [{ input: [0.5, 0.1, 0.56, 0.8], expected: 0.8 }].forEach(
    ({ input, expected }) =>
      it(`should return the largest decimal number from the array`, () => {
        expect(findMax(input)).toEqual(expected);
      })
  );

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  [
    { input: ["edak", "ofonime", "", "@", -4, 10, 6, 50, -100], expected: 50 },
  ].forEach(({ input, expected }) =>
    it(`should return max numerical value from the array`, () => {
      expect(findMax(input)).toEqual(expected);
    })
  );

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs
  [{ input: ["peter", "", "@", "Hi"], expected: "invalid elements" }].forEach(
    ({ input, expected }) =>
      it(`should return "invalid elements" for non-numeric values`, () => {
        expect(findMax(input)).toEqual(expected);
      })
  );
});
