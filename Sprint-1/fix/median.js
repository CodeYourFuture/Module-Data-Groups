// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// function calculateMedian(list) {
// const middleIndex = Math.floor(list.length / 2);
// const median = list.splice(middleIndex, 1)[0];
//  return median;
// }

module.exports = calculateMedian;


// I followed the instructions to fix the calculateMedian function:

// I started by attempting to run the tests in the Sprint-1/fix directory using npm test -- fix.
// After resolving setup issues and running npx jest, I reviewed the test failures.
// I then analysed the original code and realised it:
// - Didn’t sort the array before finding the median
// - Mutated the original list using .splice()
// - Didn’t handle non-numeric values or invalid inputs
// I rewrote the function to:
// - Filter out all non-numeric values (including NaN)
// - Handle edge cases like no numbers in the list or invalid input
// - Sort only the numeric values in ascending order
// - Correctly calculate the median for both even and odd-length arrays
// I avoided modifying the original input list by using the spread operator ([...numbers])
// I used the test results to confirm that the function now works as expected

function calculateMedian(list) {

  if (!Array.isArray(list)) return null;

  const numbers = list.filter(n => typeof n === 'number' && !isNaN(n));

  if (numbers.length === 0) return null;

  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}