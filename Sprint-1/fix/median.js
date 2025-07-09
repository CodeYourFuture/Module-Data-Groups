// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) ) {
    return null; // Return null if the input is not an array
  }
  const sortedList = list
  .filter(item => typeof item === 'number')
  .sort((a, b) => a - b);
  
  if (sortedList.length === 0) {
    return null; // Return null if there are no numbers in the list
  }
  
  // Calculate the median
  // If the length of the sorted list is odd, return the middle number
  const middleIndex = Math.floor(sortedList.length / 2);
  if (sortedList.length % 2 === 0) {  
    // If the length of the sorted list is even, return the average of the two middle numbers
    const mid1 = sortedList[middleIndex - 1];
    const mid2 = sortedList[middleIndex];
    return (mid1 + mid2) / 2;
  }
  // If the length of the sorted list is odd, return the middle number
  if (sortedList.length%2 !== 0) {
    return sortedList[middleIndex];
  }
return null; // Return null if the list is empty or has no numbers

}

module.exports = calculateMedian;
