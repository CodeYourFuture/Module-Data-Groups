// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

/*function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
}

module.exports = calculateMedian;*/

//Answer:
function calculateMedian(list) {
  // Handle the empty array case
  if (list.length === 0) {
    throw new Error("Cannot calculate median of an empty array");
  }

  // Copy and sort the list
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  // Check for odd or even length
  if (sortedList.length % 2 === 0) {
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;


