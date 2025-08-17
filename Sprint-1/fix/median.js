// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if input is a valid array
  if (!Array.isArray(list)) return null;

  // Filter out non-numeric values
  const numbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // If no valid numbers, return null
  if (numbers.length === 0) return null;

  // Sort the numbers and calculate the median
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // If the length of the sorted array is even, return the average of the two middle numbers
  // If odd, return the middle number
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

module.exports = calculateMedian;
