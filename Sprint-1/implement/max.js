function findMax(elements) {
  // Check if input is an array
  if (!Array.isArray(elements)) {
    return null;
  }
  // Filter only numeric values
  const numericElements = elements.filter((item) => typeof item === "number");
  // Check if array is empty after filtering
  if (numericElements.length === 0) {
    return -Infinity;
  }
  // Return the maximum value
  return Math.max(...numericElements);
}

module.exports = findMax;
