// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  // Sort the list in ascending order
  list.sort((a, b) => a - b);

  const middleIndex = Math.floor(list.length / 2);

  // For odd-length lists, return the middle element
  if (list.length % 2 !== 0) {
    return list[middleIndex];
  }

  // For even-length lists, return the average of the two middle elements
  const median = (list[middleIndex - 1] + list[middleIndex]) / 2;
  return median;
}

module.exports = calculateMedian;

