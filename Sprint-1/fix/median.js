// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  const middleIndex = Math.floor(list.length / 2);
  let median;
  const copyList = list.slice();
  copyList.sort((a, b) => a - b);

  for (const elements of copyList) {
    if (typeof elements !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }
  if (copyList.length % 2 === 0) {
    median = (copyList[middleIndex] + copyList[middleIndex - 1]) / 2;
  } else {
    median = copyList[middleIndex];
  }
  return median;
}

module.exports = calculateMedian;
