// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if input is an array
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter out non-numbers (keep only numbers)
  const numbers = list.filter(item => typeof item === 'number' && !isNaN(item));

  // If no numbers in the array, return null
  if (numbers.length === 0) {
    return null;
  }

  // Sort the numbers in ascending order
  const sorted = [...numbers].sort((a, b) => a - b);

  const middleIndex = Math.floor(sorted.length / 2);

  // If length is odd, return the middle element
  if (sorted.length % 2 !== 0) {
    return sorted[middleIndex];
  }
  // If length is even, return the average of the two middle elements
  else {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
