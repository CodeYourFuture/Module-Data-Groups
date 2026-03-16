// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let median = null;
  if (Array.isArray(list) && !list.every((item) => typeof item != "number")) {
    numericList = list.filter((item) => typeof item === "number");
    sortedList = numericList.toSorted((a, b) => a - b);
    const middleIndex = Math.floor(sortedList.length / 2);
    if (sortedList.length % 2 === 0) {
      const medianArray = sortedList.splice(middleIndex - 1, 2);
      median = (medianArray[0] + medianArray[1]) / 2;
    } else median = sortedList.splice(middleIndex, 1)[0];
  }
  return median;
}

module.exports = calculateMedian;
