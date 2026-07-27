// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    return null;
  }
  const allNumbers = list.filter((item) => typeof item === "number");
  if (allNumbers.length === 0) {
    return null;
  }

  function compareNumbers(a, b) {
    return a - b;
  }
  const sortedNumbers = allNumbers.sort(compareNumbers);
  let result = 0;
  for (i = 0; i < sortedNumbers.length; i++) result += sortedNumbers[i];
  if (sortedNumbers.length % 2 === 0) {
    const median = result / sortedNumbers.length;
    return median;
  }
  if (sortedNumbers.length % 2 !== 0) {
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    return sortedNumbers[middleIndex];
  }
}

module.exports = calculateMedian;
