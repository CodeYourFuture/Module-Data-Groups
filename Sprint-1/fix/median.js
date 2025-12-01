// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  const numericValue = list.filter(n => typeof n === 'number' && !isNaN(n));
  if (numericValue.length === 0) return null;

  const sorted = [...numericValue].sort((a, b) => a - b);

  const middleIndex = Math.floor(sorted.length / 2);
  
  return sorted.length % 2 === 0
    ? (sorted[middleIndex - 1] + sorted[middleIndex]) / 2
    : sorted[middleIndex];
}

module.exports = calculateMedian;