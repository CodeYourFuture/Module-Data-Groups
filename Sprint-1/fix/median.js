// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Make sure input is an array
  if (!Array.isArray(list)) return null;

  // Filter only valid numbers (exclude NaN, null, strings, etc.)
  const numbers = list.filter((n) => typeof n === "number" && !isNaN(n));

  if (numbers.length === 0) return null;

  const mid = Math.floor(sorted.length / 2);

  const sorted = numbers.sort((a, b) => a - b);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}

module.exports = calculateMedian;
