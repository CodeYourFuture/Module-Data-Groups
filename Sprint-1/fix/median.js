// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function calculateMedian(list) {
  // chekc it is an rray
  if (!Array.isArray(list)) return null;

  // pull out numbers
  const nums = list.filter(n => typeof n === "number" && !Number.isNaN(n));

  // If no  numbers, return null
  if (nums.length === 0) return null;

  // Sort without changing original array
  const sorted = [...nums].sort((a, b) => a - b);

  const len = sorted.length;
  const mid = Math.floor(len / 2);

  //  If length is odd, take middle element
  if (len % 2 === 1) {
    return sorted[mid];
  }

  // If length is even  take average of two middle elements
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

module.exports = calculateMedian;