// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).
// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).
function calculateMedian(list) {
  if (!Array.isArray(list) || list.length < 2) {
    return null;
  }
  const filteredList = list.filter((value) => typeof value === "number");
  if (filteredList.length < 2) {
    return null;
  }
  const sortedList = filteredList.sort((a, b) => a - b);
  const evenLength = sortedList.length % 2 === 0;
  const middleIndex = Math.floor(sortedList.length / 2);
  if (evenLength) {
    const evenListCalc =
      (sortedList[middleIndex] + sortedList[middleIndex - 1]) / 2;
    return evenListCalc;
  } else {
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;
