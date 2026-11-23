const describeMedian = require("./describe-median.js");

describe("describeMedian", () => {
  test('given [1, 2, 3], returns "The median is 2"', () => {
    expect(describeMedian([1, 2, 3])).toBe("The median is 2");
  });

  test("given an empty array, returns an explanation using the error message", () => {
    expect(describeMedian([])).toBe(
      "Could not calculate a median: calculateMedian requires a non-empty array"
    );
  });

  test("given something that isn't an array of numbers, returns an explanation using the error message", () => {
    expect(describeMedian("banana")).toBe(
      "Could not calculate a median: calculateMedian requires an array of numbers"
    );
    expect(describeMedian([1, "two", 3])).toBe(
      "Could not calculate a median: calculateMedian requires an array of numbers"
    );
  });
});