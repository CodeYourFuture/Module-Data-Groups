function findMax(elements) {
  if (!Array.isArray(elements)) {
    return null;
  }

  // If the array is truly empty, return -Infinity
  if (elements.length === 0) {
    return -Infinity;
  }

  // Filter only numeric values
  const numbers = elements.filter(function (item) {
    return typeof item === "number" && !isNaN(item);
  });

  // If there are no numeric values but the array wasn't empty, return null
  if (numbers.length === 0) {
    return null;
  }

  // Otherwise, return the largest number
  return Math.max.apply(null, numbers);
}

module.exports = findMax;

