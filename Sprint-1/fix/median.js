// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // this line of code checks if the list is an array and if it has any elements. If not, it returns null
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }
  // this line of code filters the list to only include numbers. And if there are no numbers in the list, it returns null
  const numbersOnly = list.filter((item) => typeof item === "number");
  if (numbersOnly.length === 0) {
    return null;
  }
  // this line of code sorts the numbers in ascending order and calculates the median based on whether the length of the sorted array is even or odd
  const sorted = [...numbersOnly].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    const median = (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
    return median;
  }
  return sorted[middleIndex];
}

module.exports = calculateMedian;
