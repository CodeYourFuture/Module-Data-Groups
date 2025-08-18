// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (
    !Array.isArray(list) ||
    list.length === 0 ||
    !list.some((value) => typeof value === "number")
  ) {
    return null;
  }
  let newArray = list.slice();
  //1 2 3 4
  const filteredResult = newArray.filter((word) => typeof word === "number");
  const orderedList = filteredResult.sort((a, b) => a - b);
  const middleIndex = Math.floor(orderedList.length / 2);
  if (orderedList.length % 2 === 0) {
    return (orderedList[middleIndex - 1] + orderedList[middleIndex]) / 2;
  }
  const median = orderedList[middleIndex];
  return median;
}

module.exports = calculateMedian;
