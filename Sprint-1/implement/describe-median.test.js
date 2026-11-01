const describeMedian = require("./describe-median.js");


test('given [1, 2, 3], returns "The median is 2"', () => {
  expect(describeMedian([1, 2, 3])).toBe("The median is 2");
});

test("returns a sentence for an empty array", () => {
  expect(describeMedian([])).toBe(
    "Could not calculate a median: calculateMedian requires a non-empty array"
  );
});

test("return a sentence for a non-array", () => {
  expect(describeMedian("banana")).toBe(
    "Could not calculate a median: calculateMedian requires an array of numbers"
  );
});
