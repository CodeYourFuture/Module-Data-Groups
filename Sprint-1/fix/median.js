// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // check if input is an array
  if (!Array.isArray(list)) return null;

  // filter out non-numeric values
  list = list.filter((item) => typeof item === "number");

  // if the array is empty after filtering, return null
  if (list.length === 0) return null;

  // sort the array
  list = [...list].sort((a, b) => a - b);

  // for the case of even length arrays
  if (list.length % 2 === 0) {
    const middleIndex1 = list.length / 2;
    const middleIndex2 = middleIndex1 - 1;
    const median = (list[middleIndex1] + list[middleIndex2]) / 2;
    return median;
  }

  // for the case of odd length arrays
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}

module.exports = calculateMedian;
