// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  if (list.length % 2 == 1) {
    const middleIndex = Math.floor(list.length / 2);
    const median = list[middleIndex];
    return median;
  } else {
    const secondMiddleIndex = Math.floor(list.length / 2);
    const median = (list[secondMiddleIndex - 1] + list[secondMiddleIndex]) / 2;
    return median;
  }
}

module.exports = calculateMedian;
