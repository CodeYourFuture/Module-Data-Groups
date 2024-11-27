// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   if (middleIndex.length % 2 === 0) {
//     return middleIndex[median - 1] + middleIndex[median] / 2;
//   } else {
//     return median;
//   }
// }
function calculateMedian(list) {
  const sortedList = [...list].sort((a, b) => a - b);
  const median = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    return (sortedList[median - 1] + sortedList[median]) / 2;
  } else {
    return sortedList[median];
  }
}

module.exports = calculateMedian;
