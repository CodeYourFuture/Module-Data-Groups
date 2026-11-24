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
  if (!list.every((v) => typeof v === "number" && Number.isFinite(v))) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  // Copy and sort numerically, so the caller's array isn't mutated
  const sorted = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    // Even length: average the two middle values
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
  // Odd length: the single middle value
  return sorted[middleIndex];
}

module.exports = calculateMedian;
