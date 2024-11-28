const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2);
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3);
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);
    expect(list).toEqual([1, 2, 3]);
  });

  test("throws an error when input is not a valid array", () => {
    expect(() => calculateMedian([])).toThrow("Input must be a non-empty array.");
    expect(() => calculateMedian(null)).toThrow("Input must be a non-empty array.");
    expect(() => calculateMedian("string")).toThrow("Input must be a non-empty array.");
  });
});
