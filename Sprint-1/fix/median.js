// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check if is an array
  if (!Array.isArray(list)) {
    return null;
  }
  //Filter numeric values
  const filteredNumericValues = list.filter(
    (item) => typeof item === "number" && Number.isFinite(item)
  );
  if (filteredNumericValues.length === 0) {
    return null;
  }

  // Sort filtered numeric values
  const sortedNumericValues = filteredNumericValues.toSorted((a, b) => a - b);
  let middleIndex = Math.floor(sortedNumericValues.length / 2);
  let medianValue;
  // ODD length
  if (sortedNumericValues.length % 2 !== 0) {
    medianValue = sortedNumericValues.slice(middleIndex, middleIndex + 1);
    return medianValue[0];
  }

  // EVEN length
  else
    return (medianValue =
      (sortedNumericValues[middleIndex - 1] +
        sortedNumericValues[middleIndex]) /
      2);
}

module.exports = calculateMedian;
