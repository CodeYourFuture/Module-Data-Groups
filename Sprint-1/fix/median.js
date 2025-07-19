// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //Array validation
  if (!Array.isArray(list)) return null;

  //Filter Only Numeric Values
  const onlyNumbers = list.filter(Number.isFinite);

  //Handle No Numbers Case
  if (onlyNumbers.length === 0) return null;

  //sorting Numeric values
  const sorted = [...onlyNumbers].sort((a, b) => a - b);

  //Find middle index
  const mid = Math.floor(sorted.length / 2);

  //The median calculation
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

module.exports = calculateMedian;
