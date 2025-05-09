// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

/*function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;
*/

function calculateMedian(list) {
  // the function calculateMedian has a parameter, list which is an array of numbers
  const sortedList = [...list].sort((a, b) => a - b); // makes a copy of the list and Sorts it in ascending order
  const middleIndex = Math.floor(sortedList.length / 2); // Finds the middleIndex and rounds it down to the nearest integer
  // To check if the length of the list is even or odd
  if (sortedList.length % 2 === 0) {
    // Returns the average of two middle numbers, if it is even
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // Returns the middle number if it is odd
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;
