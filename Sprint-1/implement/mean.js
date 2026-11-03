function calculateMean(list) {
  if (!Array.isArray(list) || list.some((item) => typeof item !== "number")) {
    throw new Error("calculateMean requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }
  let total = 0;
  for (const item of list) {
    total += item;
  }
  return total / list.length;
}

module.exports = calculateMean;
