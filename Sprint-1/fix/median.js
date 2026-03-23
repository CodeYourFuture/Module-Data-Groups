// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if input is an array
  if (!Array.isArray(list)) return null;

  // Filter only valid numbers
  const numbers = list.filter(
    (item) => typeof item === "number" && Number.isFinite(item)
  );

  // If no valid numbers, return null
  if (numbers.length === 0) return null;

  // Sort without mutating original array
  const sorted = [...numbers].sort((a, b) => a - b);

  const middle = Math.floor(sorted.length / 2);

  // Even length
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  // Odd length
  return sorted[middle];
}

module.exports = calculateMedian;
