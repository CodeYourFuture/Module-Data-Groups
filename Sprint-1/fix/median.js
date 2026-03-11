// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // must be an array
  if (!Array.isArray(list)) return null;

  // keep only finite numbers (filters out strings, null, undefined, NaN, Infinity)
  const numbers = list.filter((x) => typeof x === "number" && Number.isFinite(x));

  // if there are no numbers (including empty array), return null
  if (numbers.length === 0) return null;

  // sort without mutating the original input array
  const sorted = [...numbers].sort((a, b) => a - b);

  const mid = Math.floor(sorted.length / 2);

  // odd length -> middle element
  if (sorted.length % 2 === 1) {
    return sorted[mid];
  }

  // even length -> average of two middle elements
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

module.exports = calculateMedian;