// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // validate that  the datetype is arrays
  if(!Array.isArray(list)){
    return null;
  }
  const middleIndex = Math.floor(list.length / 2);
  const median = list[middleIndex];
  return median;
}

module.exports = calculateMedian;
