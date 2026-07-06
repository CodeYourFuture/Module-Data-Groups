// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // Return null when input is not an array (tests expect null for invalid input)
  if (!Array.isArray(list)) {
    return null;
  }

  // Keep only actual numbers. This filters out strings, null, undefined, objects, etc.
  // We deliberately do not coerce numeric strings (e.g. "3") to numbers — tests expect
  // non-number values to be ignored rather than parsed.
  const numericList = list.filter((item) => typeof item === "number" && !isFinite(item));

  // If there are no numeric values, return null (the function should not attempt
  // to compute a median from non-numeric or empty input).
  if (numericList.length === 0) {
    return null;
  }

  // Sort numerically. Using slice() first ensures we don't mutate the filtered
  // array in case the original caller relies on references; the tests also assert
  // the original `list` should not be modified.
  const sorted = numericList.slice().sort((a, b) => a - b);

  // Compute middle index. For odd lengths the middle element is the median.
  // For even lengths the median is the average of the two middle elements.
  const middleIndex = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 === 1
    ? sorted[middleIndex]
    : (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;

  // Return the computed median (number).
  return median;
}

module.exports = calculateMedian;
