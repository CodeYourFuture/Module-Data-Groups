// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  
  const numericValues = list.filter(item => typeof item === 'number' && !isNaN(item));
  
  if (numericValues.length === 0) {
    return null;
  }
  
  const sortedList = [...numericValues].sort((a, b) => a - b);
  
  const length = sortedList.length;
  const middleIndex = Math.floor(length / 2);
  
  if (length % 2 === 1) {
    return sortedList[middleIndex];
  }
  
  return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
}

module.exports = calculateMedian;

