// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const list2 = list
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);
  if (list2.length === 0) {
    return null;
  }
  if (list2.length % 2 === 1) {
    const middleIndex = Math.floor(list2.length / 2);
    const median = list2[middleIndex];
    return median;
  }
  if (list2.length % 2 === 0) {
    const middleIndex = Math.floor(list2.length / 2);
    const median = (list2[middleIndex] + list2[middleIndex - 1]) / 2;
    return median;
  }
}

module.exports = calculateMedian;
