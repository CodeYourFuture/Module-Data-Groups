// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  [
    { input: [1, 2, 3], expected: 2 },
    { input: [1, 2, 3, 4, 5], expected: 3 },
    { input: [1, 2, 3, 4], expected: 2.5 },
    { input: [1, 2, 3, 4, 5, 6], expected: 3.5 },
  ].forEach(({ input, expected }) =>
    it(`returns the median for [${input}]`, () => expect(calculateMedian(input)).toEqual(expected))
  );

  [
    { input: [3, 1, 2], expected: 2 },
    { input: [5, 1, 3, 4, 2], expected: 3 },
    { input: [4, 2, 1, 3], expected: 2.5 },
    { input: [6, 1, 5, 3, 2, 4], expected: 3.5 },
    { input: [110, 20, 0], expected: 20 },
    { input: [6, -2, 2, 12, 14], expected: 6 },
  ].forEach(({ input, expected }) =>
    it(`returns the correct median for unsorted array [${input}]`, () => expect(calculateMedian(input)).toEqual(expected))
  );

  it("doesn't modify the input array [3, 1, 2]", () => {
    const list = [3, 1, 2];
    calculateMedian(list);
    expect(list).toEqual([3, 1, 2]);
  });

  // There is no median of an empty array, so calculateMedian should throw
  it("throws when given an empty array", () => {
    expect(() => calculateMedian([])).toThrow(
      new Error("calculateMedian requires a non-empty array")
    );
  });

  // Non-array input should throw (no argument at all counts, as 'list' is then undefined)
  [ 'banana', 123, null, undefined, {}, ["apple", null, undefined], ["ten", "twenty"] ].forEach(val =>
    it(`throws for non-numeric input (${val})`, () =>
      expect(() => calculateMedian(val)).toThrow(
        new Error("calculateMedian requires an array of numbers")
      ))
  );

  it("throws when called with no argument", () => {
    expect(() => calculateMedian()).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  // Arrays containing any non-number value should throw, rather than filtering them out
  [
    [1, 2, "3", null, undefined, 4],
    ["apple", 1, 2, 3, "banana", 4],
    [1, "2", 3, "4", 5],
    [1, "apple", 2, null, 3, undefined, 4],
    [3, "apple", 1, null, 2, undefined, 4],
    ["banana", 5, 3, "apple", 1, 4, 2],
  ].forEach((input) =>
    it(`throws for an array containing a non-number [${input}]`, () =>
      expect(() => calculateMedian(input)).toThrow(
        new Error("calculateMedian requires an array of numbers")
      ))
  );
});
