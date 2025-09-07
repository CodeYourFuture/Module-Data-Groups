// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  // Filter to keep only numbers
  const numbers = list.filter(item => typeof item === "number");

  if (numbers.length === 0) return null;

  // Sort numbers ascending (without modifying original array)
  const sorted = [...numbers].sort((a, b) => a - b);

  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 !== 0) {
    // Odd length, return middle value
    return sorted[mid];
  } else {
    // Even length, return average of two middle values
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

module.exports = calculateMedian;
