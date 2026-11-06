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

  if (
    !list.every(
      (value) =>
        typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value)
    )
  ) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  const sortedList = list.toSorted((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);
  let median;
  if (sortedList.length % 2 === 0) {
    median = (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    median = sortedList[middleIndex];
  }
  return median;
}

module.exports = calculateMedian;
