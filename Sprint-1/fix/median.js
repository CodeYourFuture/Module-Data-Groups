// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  if (Array.isArray(list) === false) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }

   if (list.some((item) => typeof item === "string" || item === null || item === undefined)) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  const sortedList = [...list].sort((a, b) => a - b);

  if (sortedList.length % 2 === 0) {
    const evenMiddleIndex = sortedList.length / 2;
    const sumOfEvenMiddleIndex =
    sortedList[evenMiddleIndex - 1] + sortedList[evenMiddleIndex]
    return sumOfEvenMiddleIndex / 2;
  } else {
    const oddMiddleIndex = Math.floor(sortedList.length / 2);
    return sortedList[oddMiddleIndex];
  }
}

module.exports = calculateMedian;
