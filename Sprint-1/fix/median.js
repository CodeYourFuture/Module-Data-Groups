// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  if (!Array.isArray(list) || !list.every((item) => typeof item === "number")) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  // test test test

  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }

  const sortedList = list.slice().sort((a, b) => a - b);

  const mid = Math.floor(sortedList.length / 2);
  const median =
    sortedList.length % 2 !== 0
      ? sortedList[mid]
      : (sortedList[mid - 1] + sortedList[mid]) / 2;

  return median;
}

module.exports = calculateMedian;
