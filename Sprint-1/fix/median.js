// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// function to sort numbers into ascending order
function sortNumberArray(sortArr) {
  const sortedArray = sortArr.slice().sort((a, b) => a - b);
  return sortedArray;
}

function calculateMedian(arr) {
  // First check if input is actually an array
  if (!Array.isArray(arr)) {
    return null;
  }

  // Filter out non-numeric values (keep only valid numbers)
  const numbersOnly = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // If no valid numbers found after filtering, return null
  if (numbersOnly.length === 0) {
    return null;
  }

  // Sort the numbers
  const sortedList = sortNumberArray(numbersOnly);
  const lengthOfList = sortedList.length;

  // Check if array is of odd or even length
  if (lengthOfList % 2 === 0) {
    // For array of even length - average the two middle values
    const medianLocator = Math.floor(lengthOfList / 2);
    const median =
      (sortedList[medianLocator - 1] + sortedList[medianLocator]) / 2;
    return median;
  } else {
    // For array of odd length - return the middle value
    const medianLocator = Math.ceil(lengthOfList / 2);
    const median = sortedList[medianLocator - 1];
    return median;
  }
}

// Test cases
console.log(calculateMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Should work
console.log(calculateMedian([7, 3, 9, 1, 5, 10, 2, 8, "a", 6])); // Should filter out 'a'
console.log(calculateMedian([5, 2, 9, 1, 7])); // Should work
console.log(calculateMedian("not an array")); // Should return null
console.log(calculateMedian(null)); // Should return null

module.exports = calculateMedian;
