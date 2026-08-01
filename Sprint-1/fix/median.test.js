// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median of a list of numbers", () => {
    expect(calculateMedian([1, 2, 3])).toBe(2);
    expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toBe(3.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6, 7])).toBe(4);
    expect(calculateMedian([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4.5);
    expect(calculateMedian([1])).toBe(1);
    expect(calculateMedian([])).toBe(null);
  });

  test("returns null if the list doesn't have numbers", () => {
    expect(calculateMedian(["a", "b", "c"])).toBe(null);
    expect(calculateMedian([true, false])).toBe(null);
    expect(calculateMedian([null, undefined])).toBe(null);
  });

  test("sorts only numbers in a mixed list and returns the median", () => {
    expect(calculateMedian([1, "a", 2, "b", 3])).toBe(2);
    expect(calculateMedian([1, 2, "a", 3, "b", 4])).toBe(2.5);
    expect(calculateMedian([1, "a", 2, "b", 3, "c"])).toBe(2);
    expect(calculateMedian([1, 2, 3, "a", "b", "c"])).toBe(2);
    expect(calculateMedian([1, 2, 3, 4, "a", "b", "c"])).toBe(2.5);
  });
}); 