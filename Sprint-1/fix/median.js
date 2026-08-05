// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  filteredList = list.filter((item) => typeof item === "number");
  if (filteredList.length === 0) {
    return null;
  }

  filteredList.sort((a, b) => a - b);
  const middleIndex = Math.floor(filteredList.length / 2);
  if (filteredList.length % 2 > 0) {
    return filteredList[middleIndex];
  } else {
    const sumOfIndex =
      filteredList[middleIndex] + filteredList[middleIndex - 1];
    const middleValue = sumOfIndex / 2;
    return middleValue;
  }
}

module.exports = calculateMedian;
