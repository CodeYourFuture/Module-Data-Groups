// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const sortedList = list.sort((a, b) => a - b);
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  if (list.length % 2 === 0) {
    const median = (sortedList[middleIndex] + sortedList[middleIndex - 1]) / 2;
    return median;
  } else {
    const median = sortedList.splice(middleIndex, 1)[0];
    return median;
  }
}

module.exports = calculateMedian;
