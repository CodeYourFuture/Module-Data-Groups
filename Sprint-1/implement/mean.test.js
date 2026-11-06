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
describe("mean", () => {
  it("given [1, 2, 6], returns 3", () => {
    expect(calculateMean([1, 2, 6])).toEqual(3);
  });

  // Given an array with a single number
  // When passed to calculateMean
  // Then it should return that number
  it("given an array with a single number, returns that number", () => {
    expect(calculateMean([5])).toEqual(5);
  });
  // Given an array containing negative or decimal numbers
  // When passed to calculateMean
  // Then it should return the correct mean
  it("given an array with negative or decimal numbers, returns the correct mean", () => {
    expect(calculateMean([-2, -6, -76])).toEqual(-28);
    expect(calculateMean([10, 0, -11])).toEqual(-0.33);
    expect(calculateMean([6.87, 3.12, -11.25])).toEqual(-0.42);
  });

  // Given an empty array
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires a non-empty array")
  it("throws when given an empty array", () => {
    expect(() => calculateMean([])).toThrow(
      new Error("calculateMean requires a non-empty array")
    );
  });

  // Given a value that isn't an array, e.g. "banana", 42, null or {}
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires an array of numbers")
  it("throws a value that isn't an array", () => {
    expect(() => calculateMean(["banana"])).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
  });

  // Given no argument at all
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires an array of numbers")
  it("throws when given no argument at all", () => {
    expect(() => calculateMean()).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
  });
  // Given an array containing a non-number value, e.g. [1, "2", 3]
  // When passed to calculateMean
  // Then it should throw Error("calculateMean requires an array of numbers")
  it("throws when given an array containing a non-number value", () => {
    expect(() => calculateMean([1, "2", 3])).toThrow(
      new Error("calculateMean requires an array of numbers")
    );
  });
});
