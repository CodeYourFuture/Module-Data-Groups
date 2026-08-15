// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns null for an empty array", () => {
    expect(calculateMedian([])).toBeNull();
  });

  test("returns null when there are no numbers", () => {
    expect(calculateMedian(["a", "b", null])).toBeNull();
  });

  test("returns the median for an odd number of elements", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2);
    expect(calculateMedian([5, 1, 3])).toEqual(3);
  });

  test("returns the median for an even number of elements", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(calculateMedian([6, 2, 4, 8])).toEqual(5);
  });

  test("ignores non-number values", () => {
    expect(calculateMedian([1, "a", 2, 3])).toEqual(2);
    expect(calculateMedian([5, "x", 1, 3])).toEqual(3);
  });

  test("ignores NaN values", () => {
    expect(calculateMedian([1, NaN, 2, 3])).toEqual(2);
  });

  test("returns the single number when the array has one number", () => {
    expect(calculateMedian([7])).toEqual(7);
  });

  test("returns the single number when mixed with non-numbers", () => {
    expect(calculateMedian(["a", 7, null])).toEqual(7);
  });
});