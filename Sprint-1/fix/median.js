// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if the input is an array
  if (!Array.isArray(list)) {
    return null;
  }
  // Filter out non-numeric values from the array
  const numbers = list.filter((x) => typeof x === "number");
  // If the filtered array is empty, return null
  if (numbers.length === 0) {
    return null;
  }

  // Sort the numbers in ascending order so the median can be calculated correctly
  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);
  // Calculate the median based on whether the length of the array is even or odd
  return numbers.length % 2 === 0
    ? (numbers[middleIndex - 1] + numbers[middleIndex]) / 2
    : numbers[middleIndex];
}

module.exports = calculateMedian;
