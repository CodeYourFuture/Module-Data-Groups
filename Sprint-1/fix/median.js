// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  let isEven = list.length % 2 == 0;
  const middleIndex = Math.floor(list.length / 2);
  if (isEven) {
    const median = (list[middleIndex] + list[middleIndex - 1]) / 2;
    return median;
  } else {
    const median = list[middleIndex];
    return median;
  }
}

module.exports = calculateMedian;
