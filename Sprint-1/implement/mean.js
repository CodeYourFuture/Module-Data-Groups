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

  const sum = list.reduce((a, b) => a + b, 0);

  return sum / list.length;
}

module.exports = calculateMean;
