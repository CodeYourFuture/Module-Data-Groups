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

  // Create a shallow copy of `validNumbers` and sort it in ascending order
  // This avoids modifying the original array
  const sorted = [...validNumbers].sort((a, b) => a - b);

  // Calculate the middle index of the sorted array
  const middleIndex = Math.floor(sorted.length / 2);

  // If the array has an odd number of elements, return the middle element
  if (sorted.length % 2 !== 0) {
    return sorted[middleIndex];
  } else {
    // If the array has an even number of elements, return the average of the two middle elements
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
