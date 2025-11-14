// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  const filteredNumericArr = list.filter(
    (el) => typeof el === "number" && Number.isFinite(el)
  );

  if (filteredNumericArr.length === 0) {
    return null;
  }

  const sortedArr = [...filteredNumericArr].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 !== 0) {
    return sortedArr[middleIndex];
  } else {
    return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
