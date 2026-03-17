// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let median = null;
  //return null if the list is not an array
  if (!Array.isArray(list)) return median;

  // return null if none of the items in the array is a number
  if (!list.some((item) => typeof item === "number")) return median;

  let numericArray = list.filter((item) => typeof item === "number");
  let sortedArray = numericArray.toSorted((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);

  //check if the number of items in the array are even or odd
  // and then calculate the median accordingly
  if (sortedArray.length % 2 === 0)
    median = (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  else median = sortedArray[middleIndex];

  if (median === null) throw new Error("Median can't be null");
  return median;
}

module.exports = calculateMedian;
