// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  list.sort((a, b) => a - b); // Ensure the list is sorted
  const middleIndex = Math.floor(list.length / 2);

  if (list.length % 2 === 0) {
    // If even, return the average of the two middle numbers
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  } else {
    // If odd, return the middle number
    return list[middleIndex];
  }
}

module.exports = calculateMedian;