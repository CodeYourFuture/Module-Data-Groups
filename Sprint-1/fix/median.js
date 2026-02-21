// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if input is an array
  if (!Array.isArray(list)) {
    return null;
  } else {
    // Get only numeric values
    const numericList = list.filter((item) => Number.isFinite(item));
    // Check if its empty after filtering
    if (numericList.length === 0) {
      return null;
    }
    // Sort the list by numeric value
    numericList.sort((a, b) => a - b);
    // Get middle index
    const middleIndex = Math.floor(numericList.length / 2);
    // Check if length is even or odd
    if (numericList.length % 2 === 0) {
      // Return average of two middle numbers
      return (numericList[middleIndex - 1] + numericList[middleIndex]) / 2;
    } else {
      // Return middle number by index
      return numericList[middleIndex];
    }
  }
}

module.exports = calculateMedian;
