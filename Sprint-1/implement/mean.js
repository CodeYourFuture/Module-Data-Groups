function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  if (list.some((item) => typeof item !== "number" || Number.isNaN(item))) {
    throw new Error("calculateMean requires an array of numbers");
  }

  const total = list.reduce((sum, num) => sum + num, 0);
  return total / list.length;
}

module.exports = calculateMean;