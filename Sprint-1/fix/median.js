// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;
  const num = list.filter((l) => typeof l === "number").sort((a, b) => a - b);
  if (num.length < 1) return null;
  if (num.length === 1) return num[0];

  const middleIndex = Math.floor(num.length / 2);

  if (num.length % 2 === 0) {
    return (num[middleIndex] + num[middleIndex - 1]) / 2;
  }
  const median = num[middleIndex];
  return median;
}

module.exports = calculateMedian;
