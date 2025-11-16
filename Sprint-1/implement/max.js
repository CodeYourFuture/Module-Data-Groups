function findMax(elements) {
  if (!Array.isArray(elements)) return null;

  const numericValues = elements.filter((el) => typeof el === "number");

  // Return -Infinity for empty input
  if (numericValues.length === 0) return -Infinity;

  return Math.max(...numericValues);
}

module.exports = findMax;