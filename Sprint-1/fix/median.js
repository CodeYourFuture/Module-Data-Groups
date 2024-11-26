// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

function calculateMedian(list) {
  const sortedList = [...list].sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;
