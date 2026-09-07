// Don't change this function.
function calculateMedian(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }
  const middleIndex = Math.floor(list.length / 2);
  const sorted = [...list].sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  }
  return sorted[middleIndex];
}

// Implement this function. See describe-median.test.js for the acceptance criteria.
function describeMedian(list) {}

module.exports = describeMedian;
