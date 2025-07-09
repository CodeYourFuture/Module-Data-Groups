function findMax(elements) {
  // Return -Infinity if the input is not an array
  if (!Array.isArray(elements)) {
    return -Infinity;
  }

  // Check if the input is an array and contains numeric values
  const numericValues = elements
    .filter((elements) => typeof elements === "number")

  // If the sorted list is empty, return null
  if (numericValues.length === 0) return -Infinity;

  // Return the largest numeric value found in the array
  return Math.max(...numericValues);
}

module.exports = findMax;
