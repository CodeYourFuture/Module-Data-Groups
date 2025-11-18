function findMax(elements) {
  // If elements is not an array, return -Infinity (least surprising behaviour)
  if (!Array.isArray(elements)) return -Infinity;

  // Filter numeric values only
  const numbers = elements.filter((item) => typeof item === "number");

  // If no numeric values found, return -Infinity
  if (numbers.length === 0) return -Infinity;

  // Return the maximum number
  return Math.max(...numbers);
}

module.exports = findMax;
