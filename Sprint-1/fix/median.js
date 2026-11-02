// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  if (Array.isArray(list) === false) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  if (list === null || list === undefined) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  if (typeof list === "string" || typeof list === "number") {
    throw new Error("calculateMedian requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }

  if (list.every((item) => typeof item === "string")) {
    throw new Error("calculateMedian requires an array of numbers");
  }

   if (list.some((item) => typeof item === "string" || item === null || item === undefined)) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  const sortedList = [...list].sort((a, b) => a - b);

  if (sortedList.length % 2 === 0) {
    const evenMiddleIndex = Math.floor(sortedList.length / 2);
    const sumOfEvenMiddleIndex =
      sortedList.splice(evenMiddleIndex, 1)[0] +
      sortedList.splice(evenMiddleIndex - 1, 1)[0];
    return sumOfEvenMiddleIndex / 2;
  } else {
    const oddMiddleIndex = Math.ceil(sortedList.length / 2);
    return sortedList.splice(oddMiddleIndex - 1, 1)[0];
  }
}

module.exports = calculateMedian;
