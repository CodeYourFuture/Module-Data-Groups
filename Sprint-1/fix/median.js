// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  // filter out non-numbers and then sort
  const filteredList = list
    .filter((item) => typeof item === "number")
    .toSorted((a, b) => a - b);

  if (filteredList.length === 0) {
    return null;
  }
  // if odd length, just return the middle index
  // else return the sum of the two middle indices divided by 2
  if (filteredList.length % 2) {
    const middleIndex = Math.floor(filteredList.length / 2);
    return filteredList[middleIndex];
  } else {
    const secondIndex = filteredList.length / 2;
    const firstIndex = secondIndex - 1;
    const median = (filteredList[firstIndex] + filteredList[secondIndex]) / 2;
    // console.log(median);
    return median;
  }
}

calculateMedian([6, -2, 2, 12, 14]);
module.exports = calculateMedian;
