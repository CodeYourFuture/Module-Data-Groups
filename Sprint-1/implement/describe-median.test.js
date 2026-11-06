/* Describe the median, or explain why there isn't one

calculateMedian is given to you at the top of describe-median.js. It throws
when it can't calculate a median. Don't change it.

Implement describeMedian, which calls calculateMedian and returns a sentence
instead of crashing.

E.g. describeMedian([1, 2, 3]), target output: "The median is 2"
E.g. describeMedian([]), target output: "Could not calculate a median: calculateMedian requires a non-empty array"

You'll need a try/catch block for this. The catch block must use the error's
message, so the caller can see what went wrong.
*/

const describeMedian = require("./describe-median.js");

// Acceptance criteria:

// Given an array of numbers
// When passed to describeMedian
// Then it should return "The median is " followed by the median
// Delete this test.todo and replace it with a test.
describe("describeMedian", () => {
  it("returns for [1, 2, 3, 4]", () => {
    const array = [1, 2, 3, 4];
    const result = describeMedian(array);
    expect(result).toBe("The median is 2.5");
  });

  // Given an empty array
  // When passed to describeMedian
  // Then it should return "Could not calculate a median: calculateMedian requires a non-empty array"
  it("returns for []", () => {
    expect(() => describeMedian([])).toThrow(
      new Error(
        "Could not calculate a median: calculateMedian requires a non-empty array"
      )
    );
  });

  // Given something that isn't an array of numbers, e.g. "banana"
  // When passed to describeMedian
  // Then it should return "Could not calculate a median: calculateMedian requires an array of numbers"
  it("returns for ['banana', 'apple', 'orange']", () => {
    expect(() => describeMedian(["banana", "apple", "orange"])).toThrow(
      new Error(
        "Could not calculate a median: calculateMedian requires an array of numbers"
      )
    );
  });
});
