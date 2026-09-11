// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  // validate the array
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  // Empty array should throw an error
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }

  const allNumbers = list.every(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );
  if (!allNumbers) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  const sorted = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);

  if (sorted.length % 2 == 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}

module.exports = calculateMedian;
