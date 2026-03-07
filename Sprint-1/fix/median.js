// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Filter out non-numeric values and sort the remaining numbers
  const numbers = list
    .filter((x) => typeof x === "number" && !isNaN(x))
    .sort((a, b) => a - b);

  if (numbers.length === 0) {
    return null;
  }

  const mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (numbers[mid - 1] + numbers[mid]) / 2;
  } else {
    return numbers[mid];
  }
}

module.exports = calculateMedian;
