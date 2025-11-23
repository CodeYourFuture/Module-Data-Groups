// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  if (list.length === 0) {
    return null;
  }
  const filteredList = list.filter((element) => typeof element === "number");
  const sortedList = filteredList.sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  const median = sortedList[middleIndex];

  if (sortedList.length === 0) {
    return null;
  }

  if (sortedList.length % 2 === 0) {
    return (sortedList[middleIndex] + sortedList[middleIndex - 1]) / 2;
  }
  return median;
}

module.exports = calculateMedian;
