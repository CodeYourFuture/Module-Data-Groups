// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const numbersOnly = list.filter((item) => Number.isFinite(item));
  const sorted = numbersOnly.sort((a, b) => a - b);

  if (sorted.length === 0) {
    return null;
  } else if (sorted.length % 2 === 0) {
    const mid1 = sorted.length / 2 - 1;
    const mid2 = sorted.length / 2;
    const median = (sorted[mid1] + sorted[mid2]) / 2;
    return median;
  } else {
    const middleIndex = Math.floor(sorted.length / 2);
    const median = sorted[middleIndex];
    return median;
  }
}

module.exports = calculateMedian;
