function findMax(elements) {
  // Filter out non-numeric values and convert to numbers
  const numbers = elements
    .filter((item) => typeof item === "number")
    .map(Number);

  // If no numbers found, return -Infinity
  if (numbers.length === 0) {
    return -Infinity;
  }

  // Find the maximum number
  return Math.max(...numbers);
}

module.exports = findMax;
