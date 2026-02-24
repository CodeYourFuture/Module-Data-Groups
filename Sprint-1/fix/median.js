// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }

  let listCopy = [...list];
  let filteredList = listCopy.filter((x) => typeof x === "number");
  let sortedList = filteredList.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  if (filteredList.length === 0) {
    return null;
  }

  let median = 0;
  if (sortedList.length % 2 === 0) {
    median = (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    median = sortedList[middleIndex];
  }

  return median;
}



module.exports = calculateMedian;
