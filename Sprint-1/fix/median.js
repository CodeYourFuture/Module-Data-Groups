// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // if list is not an array, stop the function and return null
  if (!Array.isArray(list)) {
    return null;
  }

  // the list is filtered to get only the numbers, then sorted in ascending order
  let newList = list.filter(item => Number.isFinite(item));
  newList = newList.sort(function (a, b) { return a - b });
  
  // here we check if the list is empty, if not we calculate the median
  if (newList.length > 0){
    const middleIndex = Math.floor( newList.length / 2);
    const median = newList[middleIndex]
    if ( newList.length % 2 !== 0) {
      return median;
    }
  return (newList[middleIndex - 1] + median) / 2;
  }
  return null;
}

module.exports = calculateMedian;

