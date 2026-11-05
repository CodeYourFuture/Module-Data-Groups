function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  for (const item of list) {
    if (typeof item !== "number" || !Number.isFinite(item)) {
      throw new Error("calculateMean requires an array of numbers");
    }
  }

  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum / list.length;
}

module.exports = calculateMean;

