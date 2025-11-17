// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Filter only number values
  const numbers = list.filter((item) => typeof item === "number");

  // Return null if no valid numbers found
  if (numbers.length === 0) {
    return null;
  }

  // Sort numerically (not alphabetically)
  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  // Odd number of elements → return the middle one
  if (numbers.length % 2 !== 0) {
    return numbers[middleIndex];
  }

  // Even number → average of the two middle values
  return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
}

module.exports = calculateMedian;
