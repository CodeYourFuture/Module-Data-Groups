// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  // Sort the list in ascending order
  const sortedList = list.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);
  
  // Check if the length of the list is even or odd
  if (sortedList.length % 2 === 0) {
    // If even, return the average of the two middle numbers
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // If odd, return the middle number
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;


// the code wasn't working because if the list has different amount of numbers, or to be specific, if the list has an even amount of numbers, the code will return the average of the two middle numbers, which is wrong. 
