// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  const numericList = list.filter((item) => Number.isFinite(item));

  if (numericList.length === 0) {
    return null;
  }

  numericList.sort((a, b) => a - b);

  const middleIndex = Math.floor(numericList.length / 2);

  if (numericList.length % 2 === 0) {
    return (numericList[middleIndex - 1] + numericList[middleIndex]) / 2;
  } else {
    return numericList[middleIndex];
  }
}

module.exports = calculateMedian;
