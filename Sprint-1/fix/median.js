// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  // Create a copy of the list to avoid modifying the original array
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  // Check if the length is odd
  if (sortedList.length % 2 !== 0) {
    return sortedList[middleIndex];
  } else {
    // If the length is even, return the average of the two middle values
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
