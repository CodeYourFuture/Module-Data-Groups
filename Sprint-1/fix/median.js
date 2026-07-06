// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // return null if it is not an array
  if (!Array.isArray(list)) return null;

  // filter only numbers from array and sort the filtered array.  If no numbers return null
  const numbers = list
    .filter((item) => typeof item === "number" && Number.isFinite(item))
    .sort((a, b) => a - b);
  if (numbers.length === 0) return null;

  // get numbers array mid point
  const middleIndex = Math.floor(numbers.length / 2);
  // check if numbers array length is even
  const isEven = numbers.length % 2 === 0;
  // calculate median based on whether the numbers array length is even or odd
  return isEven
    ? (median = (numbers[middleIndex - 1] + numbers[middleIndex]) / 2)
    : numbers[middleIndex];
}

module.exports = calculateMedian;
