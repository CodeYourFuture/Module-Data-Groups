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
    if (typeof item !== "number" || !Number.isFinite(item)) {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }

  const listLength = list.length;
  const copy = [...list];
  const middleIndex = Math.floor(listLength / 2);
  copy.sort((a, b) => a - b);
  if (listLength % 2 === 0) {
    const median = (copy[middleIndex - 1] + copy[middleIndex]) / 2;
    return median;
  } else {
    return copy[middleIndex];
  }
}

module.exports = calculateMedian;
