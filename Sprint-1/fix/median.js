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

  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }

  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 === 1) {
    return sortedList[middleIndex];
  }

  const lowerMiddle = sortedList[middleIndex - 1];
  const upperMiddle = sortedList[middleIndex];
  return (lowerMiddle + upperMiddle) / 2;
}

module.exports = calculateMedian;
