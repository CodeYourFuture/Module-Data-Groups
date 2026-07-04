// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(arr) {
  try {
    if (!Array.isArray(arr)) return null;

    const nums = [];

    for (const x of arr) {
      // skip null/undefined
      if (x === null || x === undefined) continue;

      if (typeof x === "string" && x.trim() === "") continue;

      const n = Number(x);

      if (Number.isFinite(n)) {
        nums.push(n);
      }
    }

    if (nums.length === 0) return null;

    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 1) {
      return sorted[mid];
    } else {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }
  } catch (e) {
    return null;
  }
}

module.exports = calculateMedian;
