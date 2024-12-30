// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory
/*
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;
*/

//  _____________________________________SOLUTION____________________________________________________________________

function calculateMedian(list) {
  // We have to create here a copy of the input array to avoid modifying the original

  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    // Even-length array: Calculate the average of the two middle numbers
    const mid1 = sortedList[middleIndex - 1];
    const mid2 = sortedList[middleIndex];
    return (mid1 + mid2) / 2;
  } else {
    // Odd-length array: Return the middle number
    return sortedList[middleIndex];
  }
}


module.exports = calculateMedian;
