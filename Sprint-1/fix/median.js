// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {

  // First: ensure input is actually an array BEFORE calling array methods
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter only number values
  const numbers = list.filter((item) => typeof item === "number");

  // Return null if no valid numbers exist
  if (numbers.length === 0) {
    return null;
  }

  // Sort values without modifying original input
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  // Odd length → return middle value
  if (sortedNumbers.length % 2 !== 0) {
    return sortedNumbers[middleIndex];
  }

  // Even length → return average of two middle values
  return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
}

module.exports = calculateMedian;
