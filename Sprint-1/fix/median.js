// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function calculateMedian(list) {
  if (!Array.isArray(list)) {
          
    return null;
  } 
  // Filter out non-numeric values
  const filteredList = list.filter(item => typeof item === 'number' && !isNaN(item));

  // If there are no valid numbers, return null
  if (filteredList.length === 0) {
    return null;
  }

  // Sort numerically (without modifying the original array)
  const sortedList = filteredList.slice().sort((a, b) => a - b);

  // Compute the median
  const midIndex = Math.floor(sortedList.length / 2);
  let median;

  if (sortedList.length % 2 === 0) {
    median = (sortedList[midIndex - 1] + sortedList[midIndex]) / 2;
  } else {
    median = sortedList[midIndex];
  }

  return median;
}

module.exports = calculateMedian;
