// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // must be an array
  if (!Array.isArray(list)) return null;
  //filter out non-numeric values

  const numericList = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  // return null if no valid numbers
  if (numericList.length === 0) return null;

  sortedList = [...numericList];

  sortedList.sort((a, b) => a - b);
  if (sortedList.length % 2 === 0) {
    let middleIndex = sortedList.length / 2;
    return (sortedList[middleIndex] + sortedList[middleIndex - 1]) / 2;
  } else {
    const middleIndex = Math.floor(sortedList.length / 2);
    const median = sortedList.splice(middleIndex, 1)[0];
    return median;
  }
}

module.exports = calculateMedian;
