// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  // Filter out items that are not numbers
  const numbersOnly = list.filter((item) => typeof item === "number");

  // Return null if no numbers found
  if (numbersOnly.length === 0) {
    return null;
  }

  // Sort the numbers into a new array (copy)
  const sorted = numbersOnly.slice().sort((a, b) => a - b);

  const middleIndex = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    // Median for even length: average of the two middle values
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    // Median for odd length: central value
    return sorted[middleIndex];
  }
}

// console.log(calculateMedian([3, "apple", 1, null, 2, undefined, 4]));

module.exports = calculateMedian;
