// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  //check if its an array and has elements
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }

  //filter only numbers
  const filteredList = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  //if no numbers present return null
  if (filteredList.length === 0) {
    return null;
  }

  //sort the filtered list
  filteredList.sort((a, b) => a - b);

  const isEven = filteredList.length % 2 === 0;

  if (isEven) {
    const mid1 = filteredList.length / 2 - 1;
    const mid2 = mid1 + 1;
    const median = (filteredList[mid1] + filteredList[mid2]) / 2;
    return median;
  } else {
    const mid = Math.floor(filteredList.length / 2);
    const median = filteredList[mid];
    return median;
  }
}

module.exports = calculateMedian;
