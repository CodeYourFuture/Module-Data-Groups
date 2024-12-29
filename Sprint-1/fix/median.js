// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

// module.exports = calculateMedian;


// correction 

function calculateMedian(arr) {
  // Create a copy to avoid modifying the input array
  const sortedArr = [...arr].sort((a, b) => a - b);

  const len = sortedArr.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    // Even-length array: average of the two middle values
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    // Odd-length array: middle value
    return sortedArr[mid];
  }
}

module.exports = calculateMedian;
