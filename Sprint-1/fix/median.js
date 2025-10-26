// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if list is a valid array
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  // Filter only numeric values (numbers, not NaN, not null, not undefined)
  const numbers = list.filter(item => typeof item === 'number' && !isNaN(item));

  // If no valid numbers found, return null
  if (numbers.length === 0) {
    return null;
  }

  // Sort the numbers in ascending order (don't mutate original array)
  const sorted = [...numbers].sort((a, b) => a - b);

  const middleIndex = Math.floor(sorted.length / 2);

  // If odd length, return the middle element
  if (sorted.length % 2 === 1) {
    return sorted[middleIndex];
  }

  // If even length, return the average of the two middle elements
  return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
}

module.exports = calculateMedian;
