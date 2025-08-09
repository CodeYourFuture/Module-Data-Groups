// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  if (list.length === 0) {
    return 0; // or null. this is the check for empty arrays 
  }
  const sortedList = list.sort((a, b) => a-b); // sorts list ascending
  const middleIndex = Math.floor(list.length / 2);
  
  if (sortedList.length % 2 === 0) {
    // For even-length arrays, calculate the average of the two middle values
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  }

  // For odd-length arrays, return the middle value
  return sortedList[middleIndex];
}

module.exports = calculateMedian;


// this correctly handles the test cases.