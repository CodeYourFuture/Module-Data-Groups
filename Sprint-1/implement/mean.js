function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires a non-empty array");
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  let total = 0;
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }
    total = total + item;
  }
  return Number(total.toFixed(2)) / list.length;
}
module.exports = calculateMean;
