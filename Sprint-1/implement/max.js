function findMax(elements) {
    // Check if input is an array
  if (!Array.isArray(elements)) return null;

  // Filter only numbers
  const numericValues = elements.filter((el) => typeof el === "number");

  // If no numeric values, return null
  if (numericValues.length === 0) return null;

  // Return the maximum number
  return Math.max(...numericValues);
}


module.exports = findMax;
