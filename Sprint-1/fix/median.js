// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;

//SOLUTIONS

function calculateMedian(list) {
  // Sort the list in ascending order
  list.sort((a, b) => a - b);

  const middleIndex = Math.floor(list.length / 2);

  // If the list length is odd, return the middle element
  if (list.length % 2 !== 0) {
    return list[middleIndex];
  } else {
    // If the list length is even, return the average of the two middle elements
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;



