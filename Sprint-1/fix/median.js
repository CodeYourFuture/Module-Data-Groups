// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Return null if input is not an array
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter out non-numeric values (keep only actual numbers)
  const numbers = list.filter((item) => typeof item === "number");

  // Return null if no valid numbers found
  if (numbers.length === 0) {
    return null;
  }

  // Sort numbers in ascending order (create a copy to avoid mutation)
  const sorted = [...numbers].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);

  // For odd-length arrays: return middle element
  // For even-length arrays: return average of two middle elements
  if (sorted.length % 2 === 1) {
    return sorted[middleIndex];
  } else {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
