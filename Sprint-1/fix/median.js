// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// median.js
function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) return null;

  const numbers = list.filter((item) => typeof item === "number");
  if (numbers.length === 0) return null;

  // Only ONE array — this sort does not mutate the original list
  numbers.sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  }

  return numbers[middle];
}


module.exports = calculateMedian;