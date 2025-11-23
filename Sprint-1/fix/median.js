// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if the input is a valid array and not empty
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }
  // Filter out non-numeric values
  const numericList = list.filter(item => typeof item === 'number' && !isNaN(item));
  if (numericList.length === 0) {
    return null;
  }
  // Sort the numeric values
  numericList.sort((a, b) => a - b);
  const middleIndex = Math.floor(numericList.length / 2);
  let median;
  if (numericList.length % 2 === 0) {
    // If even number of elements, average the two middle values
    median = (numericList[middleIndex - 1] + numericList[middleIndex]) / 2;
  } else {
    // If odd number of elements, take the middle value
    median = numericList[middleIndex];
  }
  if (typeof median !== 'number' || isNaN(median)) {
    return null;
  }
  return median;
}

module.exports = calculateMedian;
