function findMax(elements) {
  // Guard: if input is not an array, behave defensively and return -Infinity
  if (!Array.isArray(elements)) {
    return -Infinity;
  }

  // Keep only actual numeric values (excludes booleans, strings, null, undefined, NaN, Infinity)
  const numbers = elements.filter(
    (item) => typeof item === "number" && Number.isFinite(item)
  );

  // If no numbers found, return -Infinity
  if (numbers.length === 0) {
    return -Infinity;
  }

  // Find and return the maximum number
  return Math.max(...numbers);
}

module.exports = findMax;
