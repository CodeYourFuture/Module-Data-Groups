// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if the input is an array, if not return null
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter the list to keep only numbers.
  // `filter` creates a new array with only numeric values.
  const numericList = list.filter((item) => typeof item === "number");

  // If there are no numbers, return null.
  if (numericList.length === 0) {
    return null;
  }

  // Sort the numbers in ascending order.
  // `sort` ensure numerical sorting, not alphabetical.
  numericList.sort((a, b) => a - b);

  const length = numericList.length;
  const middleIndex = Math.floor(length / 2);

  // Check if the list has an odd number of elements.
  if (length % 2 !== 0) {
    // If odd, return the middle element.
    return numericList[middleIndex];
  } else {
    // If even, calculate the average of the two middle elements.
    return (numericList[middleIndex - 1] + numericList[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
