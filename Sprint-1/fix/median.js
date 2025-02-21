// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median =
    list.length % 2 !== 0
      ? list.slice(middleIndex, middleIndex + 1)[0]
      : (list[middleIndex] + list[middleIndex - 1]) / 2;
  return median;
}

module.exports = calculateMedian;
