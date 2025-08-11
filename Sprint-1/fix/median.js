// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).



function calculateMedian(list) {
  // Validate input: must be an array with at least one number
  if (!Array.isArray(list)) return null; // Returns null for non-arrays.

  const numericValues = list.filter( // Keeps only numbers, filtering out non-numeric values: empty slots, null, undefined, strings.
    item => typeof item === "number" && !isNaN(item) // Ensures all elements are numbers, and not NaN.
  );

  if (numericValues.length === 0) return null; // Returns null if no numeric values left.

  // Using spread operator (...list) to create copy of original list without modifying it, then sort copied array in ascending order.
  const sorted = [...numericValues].sort((a, b) => a - b); // Ensures numeric based sorting 
  const middleIndex = Math.floor(sorted.length / 2); // Math.floor rounds down index if number of elements is odd, then calculates middle index of sorted array.

  return sorted.length % 2 === 0  // Checks if the number of elements is even.
    ? (sorted[middleIndex - 1] + sorted[middleIndex]) / 2 // If even number of elements, returns average of the two middle numbers: (40 + 50) / 2 = median (45)
    : sorted[middleIndex]; // If array has odd number of elements, returns the value at the middle index.
}

module.exports = calculateMedian;

// console.log(calculateMedian([20, 30, 40, 50, 60, 70]));     