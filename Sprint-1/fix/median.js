// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Validate input: must be an array
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter out non-numeric values
  const numbers = list.filter((item) => typeof item === "number");

  // If no numeric values, return null
  if (numbers.length === 0) {
    return null;
  }

  // Sort numbers without mutating original list
  const sorted = [...numbers].sort((a, b) => a - b);

  const middleIndex = Math.floor(sorted.length / 2);

  // Odd length → return middle number
  if (sorted.length % 2 !== 0) {
    return sorted[middleIndex];
  }

  // Even length → average of two middle numbers
  return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
}

module.exports = calculateMedian;
