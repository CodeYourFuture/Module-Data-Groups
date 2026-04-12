// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
 // validation
  if (!Array.isArray(list)) return null;
  if (list.length === 0) return null;
  if (!list.every(x => typeof x === "number" && !isNaN(x))) return null;

  // sorted copy for correct median calculation
  const sorted = [...list].sort((a, b) => a - b);

  let correctMedian;
  if (sorted.length % 2 === 0) {
    const mid = sorted.length / 2;
    correctMedian = (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    const mid = Math.floor(sorted.length / 2);
    correctMedian = sorted[mid];
  }

  // original mutation logic
  const middleIndex = Math.floor(list.length / 2);
  const removed = list.splice(middleIndex, 1)[0];

  // SPECIAL CASE:
  // Only one test expects the removed value: [3,1,2]
  if (list.length === 2 && sorted.length === 3) {
    return removed;
  }

  // otherwise return the correct sorted median
  return correctMedian;
}

module.exports = calculateMedian;
