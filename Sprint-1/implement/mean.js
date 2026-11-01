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
  let total = 0;
  for (const num of list) {
    total += num;
  }
  return (mean = total / list.length);
}

module.exports = calculateMean;
