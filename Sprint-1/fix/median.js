// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }

  for (const item of list) {
    if (!Number.isFinite(item)) {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }

  const sorted = list.toSorted((a, b) => a - b);
  const oddNum = list.length % 2 === 1;

  if (oddNum) {
    const middleIndex = Math.floor(list.length / 2);
    return sorted[middleIndex];
  } else {
    const middleIndex = Math.floor(list.length / 2);
    const middle = middleIndex - 1;
    const median = (sorted[middleIndex] + sorted[middle]) / 2;
    return median;
  }
}

module.exports = calculateMedian;
