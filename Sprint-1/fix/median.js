// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory



// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  // 1. Check if 'list' is a valid array and not null/undefined
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }

  // 2. Check if the array is empty
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }

  // 3. Check if every item in the array is a valid number (no strings, null, undefined, etc.)
  for (const item of list) {
    if (typeof item !== "number" || Number.isNaN(item)) {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }

  // 4. Create a sorted copy of the array so we don't mutate the original input
  const sorted = [...list].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  // 5. Calculate median for odd vs even length arrays
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

module.exports = calculateMedian;