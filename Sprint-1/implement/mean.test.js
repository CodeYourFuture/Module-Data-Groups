/* Calculate the mean of an array of numbers

In this kata, you will need to implement a function that calculates the mean of an array of numbers.

E.g. calculateMean([1, 2, 6]), target output: 3
E.g. calculateMean([]) throws Error("calculateMean requires a non-empty array")
E.g. calculateMean("banana") throws Error("calculateMean requires an array of numbers")

There is no mean of an empty array, and a string isn't an array of numbers, so
calculateMean should throw rather than return a value. This is the same problem
calculateMedian solves in the prep and in the fix directory.

You should implement this function in mean.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const calculateMean = require("./mean.js");

// Acceptance criteria:

// Given an array of numbers
// When passed to calculateMean
// Then it should return their mean
// Delete this test.todo and replace it with a test.
describe("calculateMean", () => {
  it("return [1, 2, 6]", () => {
    expect(calculateMean([1, 2, 6])).toEqual(3);
  });

  // Given an array with a single number
  // When passed to calculateMean
  // Then it should return that number
  it("returns for [6]", () => {
    expect(calculateMean([6])).toEqual(6);
  });

  // Given an array containing negative or decimal numbers
  // When passed to calculateMean
  // Then it should return the correct mean
  it("returns for 10, 20.5, -10, 30.5]", () => {
    expect(calculateMean([10, 20.5, -10, 30.5])).toEqual(12.75);
  });

  it("returns for [1.2, 0.6, 0.005]", () => {
    expect(calculateMean([1.2, 0.6, 0.005])).toBeCloseTo(0.6017);
  });

  // Given an empty array
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires a non-empty array")

  it("returns for []", () => {
    () =>
      expect(calculateMean([])).toThrow(
        new Error("calculateMean requires a non-empty array")
      );
  });

  // Given a value that isn't an array, e.g. "banana", 42, null or {}
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires an array of numbers")

  it("returns for 'banana'", () => {
    () =>
      expect(calculateMean("banana")).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });

  it("returns for 42", () => {
    () =>
      expect(calculateMean(42)).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });

  it("returns for null", () => {
    () =>
      expect(calculateMean(null)).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });

  it("returns for {}", () => {
    () =>
      expect(calculateMean({})).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });

  // Given no argument at all
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires an array of numbers")

  it("returns for ''", () => {
    () =>
      expect(calculateMean("")).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });

  // Given an array containing a non-number value, e.g. [1, "2", 3]
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires an array of numbers")
  it("returns for [1, '2', 3]", () => {
    () =>
      expect(calculateMean([1, "2", 3])).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });

  it("returns for [Infinity, 0, -Infinity]", () => {
    () =>
      expect(calculateMean([Infinity, 0, -Infinity])).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });

  it("returns for [0, NaN]", () => {
    () =>
      expect(calculateMean([0, NaN])).toThrow(
        new Error("calculateMean requires an array of numbers")
      );
  });
});
