// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // 1. Validate that input is an array
  if (!Array.isArray(list)) {
    return null;
  }

  // 2. Keep ONLY elements that are strictly numbers (excluding strings, NaN, null, undefined)
  const numericValues = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // 3. Return null if no valid numbers remain
  if (numericValues.length === 0) {
    return null;
  }

  // 4. Sort ascending
  numericValues.sort((a, b) => a - b);

  const median = Math.floor(numericValues.length / 2);

  // 5. Return median for odd length
  if (numericValues.length % 2 !== 0) {
    return numericValues[median];
  }

  // 6. Return median for even length
  return (numericValues[median - 1] + numericValues[median]) / 2;
}

module.exports = calculateMedian;