// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // only operate on non-empty arrays
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  const numbers = list.filter((item) => typeof item === "number");
  if (numbers.length === 0) {
    return null;
  }

  numbers.sort((a, b) => a - b);
  if (numbers.length % 2 === 0) {
    const mid1 = numbers.length / 2 - 1;
    const mid2 = numbers.length / 2;
    return (numbers[mid1] + numbers[mid2]) / 2;
  }
  const middleIndex = Math.floor(numbers.length / 2);
  const median = numbers[middleIndex];
  return median;
}

module.exports = calculateMedian;
