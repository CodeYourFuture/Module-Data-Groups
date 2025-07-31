// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if the list is an array and not empty
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  // Filter out non-numeric values (NaN, undefined, etc.)
  const numbersOnly = list.filter((item) => Number.isFinite(item));

  // If no numeric values remain after filtering, return null
  if (numbersOnly.length === 0) {
    return null;
  }

  // Sort the filtered array in ascending order
  numbersOnly.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbersOnly.length / 2);

  // If odd length, return the middle element
  if (numbersOnly.length % 2 !== 0) {
    return numbersOnly[middleIndex];
  }
  // If even length, return average of two middle elements
  else {
    const middle1 = numbersOnly[middleIndex - 1];
    const middle2 = numbersOnly[middleIndex];
    return (middle1 + middle2) / 2;
  }
}
module.exports = calculateMedian;
