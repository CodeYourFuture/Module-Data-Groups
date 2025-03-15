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
  ].forEach(({ input, expected }) =>
    it(`returns the correct median for unsorted array [${input}]`, () => expect(calculateMedian(input)).toEqual(expected))
  );

  it("doesn't modify the input array [1, 2, 3]", () => {
    const list = [1, 2, 3];
    calculateMedian(list);
    expect(list).toEqual([1, 2, 3]);
  });
});
