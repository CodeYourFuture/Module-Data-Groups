// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
 
  if (!Array.isArray(list)) return null;
  const numericList = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numericList.length === 0) return null;



  numericList.sort((a, b) => a - b);
  if (numericList.length % 2 === 0) {
    let middleIndex = numericList.length / 2;
    return (numericList[middleIndex] + numericList[middleIndex - 1]) / 2;
  } else {
    const middleIndex = Math.floor(numericList.length / 2);
    const median = numericList[middleIndex];
    return median;
  }
}

module.exports = calculateMedian;
