// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {

  // first of all, checking if 'list' is an array
  if (Array.isArray(list)) {
    
    const filteredArr = list.filter(x => typeof x === 'number');
  
    if (filteredArr.length < 2) {
      return null;
    }
  
    // using 'spread operator' copies the array without mutating it
    const sortedList = [...filteredArr].sort((a, b) => a - b);
  
    const middleIndex = Math.floor(sortedList.length / 2);
  
    if (sortedList.length % 2 === 0) {
      return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
    } else {
      return sortedList[middleIndex]
    }
  }
  return null;
}

module.exports = calculateMedian;
