// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Throw out invalid arrays
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter and sort numbers only
  const sortedList = list
    .filter((item) => typeof item === "number" && !isNaN(item))
    .sort((a, b) => a - b);

  // Throw out empty arrays
  if (sortedList.length < 2) {
    return null;
  }

  const middleIndex = Math.floor(sortedList.length / 2);
  const median =
    sortedList.length % 2 === 0
      ? (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2
      : sortedList[middleIndex];
  return median;
}

module.exports = calculateMedian;
