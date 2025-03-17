// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const sortedList = list.sort((a, b) => a - b);
  return list.length % 2 === 0
    ? (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2
    : list[middleIndex];
}

module.exports = calculateMedian;
