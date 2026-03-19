// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Step 1: must be an array
  if (!Array.isArray(list)) return null;

  // Step 2: filter numeric values
  const numericValues = list.filter(
    (item) => typeof item === "number" && !Number.isNaN(item)
  );

  // Step 3: must have at least one number
  if (numericValues.length === 0) return null;

  // Step 4: sort safely
  const sortedList = numericValues.slice().sort((a, b) => a - b);

  const middleIndex = Math.floor(sortedList.length / 2);

  // Step 5: median
  if (sortedList.length % 2 !== 0) {
    return sortedList[middleIndex];
  }

  return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
}

module.exports = calculateMedian;
