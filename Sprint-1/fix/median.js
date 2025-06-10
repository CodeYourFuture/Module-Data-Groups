// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  let filtered = list.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
  if (filtered.length === 0) return null;

  let sorted = filtered.sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

console.log(calculateMedian(["apple",30,20,40,50]))
module.exports = calculateMedian;
