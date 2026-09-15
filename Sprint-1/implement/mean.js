function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }
  }
  const total = list.reduce((sum, number) => sum + number, 0);
  return total / list.length;
}

module.exports = calculateMean;
