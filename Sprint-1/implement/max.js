function findMax(elements) {
  // If it's not an array, we can't process it
  if (!Array.isArray(elements)) {
    return null;
  }

  // Given an empty array, return -Infinity
  if (elements.length === 0) {
    return -Infinity;
  }

  // Keep only numeric values
  const numericValues = elements.filter((el) => typeof el === "number");

  // If there are no numeric values at all, return null
  if (numericValues.length === 0) {
    return null;
  }

  // Return the largest number (works for positive, negative, decimals)
  return Math.max(...numericValues);
}

module.exports = findMax;