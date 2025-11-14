// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// median.js
function calculateMedian(list) {
  // 1) Must be an array
  if (!Array.isArray(list)) return null;  

  // 2) Keep only real numeric values (ignore strings, null, undefined, NaN, etc.)
  const numbers = list.filter(v => typeof v === 'number' && Number.isFinite(v));

  // 3) If there are no numbers, return null
  if (numbers.length === 0) return null;

  // 4) Sort a copy numerically (don't mutate the original)
  const sorted = numbers.slice().sort((a, b) => a - b);

  // 5) Pick middle index
  const mid = Math.floor(sorted.length / 2);

  // 6) Odd length -> middle element; Even length -> average of two middle elements
  if (sorted.length % 2 === 1) {
    return sorted[mid];
  }
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

module.exports = calculateMedian;