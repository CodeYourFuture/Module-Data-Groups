// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Return null for non arrays
  if (!Array.isArray(list)) return null;
  // Filter to only numeric values
  const nums = list.filter((x) => typeof x === "number" && isFinite(x));
  // Return null if no valid numbers remain
  if (nums.length === 0) return null;

  const sorted = [...nums].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);

  return sorted.length % 2 !== 0
    ? sorted[middleIndex]
    : (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
}

module.exports = calculateMedian;
