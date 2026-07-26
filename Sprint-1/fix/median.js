// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const arrCopy = [...list];
  const filteredNumbers = arrCopy.filter((num) => Number.isFinite(num));

  if (filteredNumbers.length === 0) {
    return null;
  }

  const sortedNumbers = filteredNumbers.sort((a, b) => a - b);
  let middleIndex;
  if (sortedNumbers.length % 2 === 0) {
    middleIndex = sortedNumbers.length / 2;
    const firstMiddleIndex = sortedNumbers[middleIndex - 1];
    const secondMiddleIndex = sortedNumbers[middleIndex];
    return (firstMiddleIndex + secondMiddleIndex) / 2;
  } else {
    middleIndex = Math.floor(sortedNumbers.length / 2);
    return sortedNumbers[middleIndex];
  }
}

// console.log(calculateMedian([100, 2, 3, 'f', 4, 9, 9, 0, "hey", 'g']))

module.exports = calculateMedian;
