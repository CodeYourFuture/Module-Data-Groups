// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }
  const numbersOnly = list.filter((element) => typeof element === "number");
  if (numbersOnly.length === 0) {
    return null;
  }

  const sortedList = [...numbersOnly].sort((a, b) => a - b);

  if (sortedList.length % 2 === 0) {
    const middleIndex = Math.floor(sortedList.length / 2);
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  }
  const middleIndex = Math.floor(sortedList.length / 2);

  return sortedList[middleIndex];
}

const salaries = [10, 40, 50, 70, 90];
const median = calculateMedian(salaries);

module.exports = calculateMedian;
