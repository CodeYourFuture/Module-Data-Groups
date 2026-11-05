function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  if (!list.every((v) => typeof v === "number" && !Number.isNaN(v))) {
    throw new Error("calculateMean requires an array of numbers");
  }

  let total = 0;
  for (const value of list) {
    total += value;
  }
  return total / list.length;
}

module.exports = calculateMean;
