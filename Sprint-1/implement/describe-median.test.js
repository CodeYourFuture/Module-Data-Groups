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

test('given [1, 2, 3], returns "The median is 2"', () => {
  expect(describeMedian([1, 2, 3])).toEqual("The median is 2");
});

test('given empty array, returns "Could not calculate a median: calculateMedian requires a non-empty array"', () => {
  expect(describeMedian([])).toEqual(
    "Could not calculate a median: calculateMedian requires a non-empty array"
  );
});
test('given something that isnt an array of numbers, returns "Could not calculate a median: calculateMedian requires an array of numbers"', () => {
  expect(describeMedian("Non-array")).toEqual(
    "Could not calculate a median: calculateMedian requires an array of numbers"
  );
});
