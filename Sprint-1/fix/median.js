// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const numbersOnly = list.filter((value) => typeof value === "number");

  if (numbersOnly.length === 0) {
    return null;
  }

  const sortedList = [...numbersOnly].sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 !== 0) {
    return sortedList[middleIndex];
  } else {
    const firstMiddle = sortedList[middleIndex - 1];
    const secondMiddle = sortedList[middleIndex];
    return (firstMiddle + secondMiddle) / 2;
  }
}

module.exports = calculateMedian;
