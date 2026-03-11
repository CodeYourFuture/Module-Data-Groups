function calculateMedian(list) {

  // must be an array
  if (!Array.isArray(list)) {
    return null;
  }

  // keep only numeric values
  const numbers = list.filter(value => typeof value === "number");

  // if no numbers exist return null
  if (numbers.length === 0) {
    return null;
  }

  // sort numbers without modifying original list
  const sorted = [...numbers].sort((a, b) => a - b);

  const middle = Math.floor(sorted.length / 2);

  // even length
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  // odd length
  return sorted[middle];
}

module.exports = calculateMedian;