// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Return null immediately if the input is not an array
  if (!Array.isArray(list)) {
    return null;
  }

  // filter() returns a new array, so this does not modify the original input
  const numbersOnly = list.filter((item) => Number.isFinite(item));

  // Return null if there are no numeric values
  if (numbersOnly.length === 0) {
    return null;
  }

  // Safe to sort directly because numbersOnly is already a new array
  const sortedNumbers = numbersOnly.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  // Even number of values: return the average of the two middle values
  if (sortedNumbers.length % 2 === 0) {
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  }

  // Odd number of values: return the middle value
  return sortedNumbers[middleIndex];
}

module.exports = calculateMedian;
