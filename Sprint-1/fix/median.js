// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  if (list.length === 0) {
    return null;
  }
  const numbersOnly = list.filter((item) => typeof item === "number");
  if (numbersOnly.length === 0) {
    return null;
  }
  const sorted = [...numbersOnly].sort((a, b) => a - b);
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    const median = (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
    return median;
  }
  return sorted[middleIndex];
}
/*
const middleIndex = Math.floor(list.length / 2);
const median = list.splice(middleIndex, 1)[0];
return median;
*/

module.exports = calculateMedian;
/*
  
 */
