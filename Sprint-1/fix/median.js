// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = [...list].sort((a, b) => a - b);

  //middle index
  const middleIndex = Math.floor(sortedList.length / 2);

  // median value
  if (sortedList.length % 2 === 0) {
    const firstMiddle = sortedList[middleIndex - 1];
    const secondMiddle = sortedList[middleIndex];
    return (firstMiddle + secondMiddle) / 2;
  } else {
    return sortedList[middleIndex];
  }
}


module.exports = calculateMedian;
