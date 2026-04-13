function calculateMedian(list) {
  // Check if input is an array
  if (!Array.isArray(list)) return null;

  // Filter only valid numbers
  const numbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // Return null if no valid numbers
  if (numbers.length === 0) return null;

  // Sort numbers without mutating original array
  const sorted = [...numbers].sort((a, b) => a - b);

  const middle = Math.floor(sorted.length / 2);

  // If even length, return average of two middle numbers
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  // If odd length, return middle value
  return sorted[middle];
}

module.exports = calculateMedian;