// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// WHAT WAS WRONG WITH THE ORIGINAL:
// 1. It used list.splice() which mutates the original array — the test requires the input not to be modified.
// 2. It didn't check whether list is actually an array, so it crashed on null/undefined/numbers.
// 3. It didn't filter out non-numeric values from mixed arrays.
// 4. It didn't sort the array before finding the middle, so unsorted inputs gave wrong results.
// 5. It didn't handle even-length arrays (should return the average of the two middle values).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  // Filter to only numbers (does not modify the original array)
  const numbers = list.filter((n) => typeof n === "number");

  if (numbers.length === 0) return null;

  // Sort into a new array so the original is never mutated
  const sorted = [...numbers].sort((a, b) => a - b);

  const mid = Math.floor(sorted.length / 2);

  // Odd length: return the middle element
  // Even length: return the average of the two middle elements
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

module.exports = calculateMedian;
