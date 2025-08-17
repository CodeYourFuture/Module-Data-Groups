// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;// checks if a list is an array
  const numbers = list.filter( x => typeof x === "number"); //keeps only numbers
  if (numbers.length === 0) return null;
  const sorted = numbers.slice().sort((a, b) => a - b);

  const middleIndex = Math.floor(sorted.length / 2);

  let median;
  if (sorted.length % 2 === 0) {
    median = (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
  else {
    median = sorted[middleIndex];
  }
  return median
}

module.exports = calculateMedian;
