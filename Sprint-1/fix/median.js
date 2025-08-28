// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const clonedList = [...list];
  const sortedClonedList = clonedList.sort((a,b) => a - b);
  const middleIndex = Math.floor(sortedClonedList.length / 2);
  if (sortedClonedList.length % 2 == 0) {
    return (list[middleIndex] + list[middleIndex -1]) / 2;
  } else {
    return list[middleIndex];
  }
}

module.exports = calculateMedian;