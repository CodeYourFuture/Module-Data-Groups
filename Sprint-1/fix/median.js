// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Check that the input passed to the function is an array
  if (!Array.isArray(list)) {
    return null;
  }

  // Filter valid numbers and store them in `validNumbers`
  const validNumbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // Return `null` if there are no valid numbers
  if (validNumbers.length === 0) {
    return null;
  }

  // Sort `validNumbers` in ascending order
  // Sort validNumbers (safe to mutate because it's a new array created by filter)
  validNumbers.sort((a, b) => a - b);

  // Calculate the middle index of the sorted array
  const middleIndex = Math.floor(validNumbers.length / 2);

  // If the array has an odd number of elements, return the middle element
  if (validNumbers.length % 2 !== 0) {
    return validNumbers[middleIndex];
  } else {
    // If the array has an even number of elements, return the average of the two middle elements
    return (validNumbers[middleIndex - 1] + validNumbers[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
