function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }
  for (const number of list) {
    if (typeof number !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }
  }
  let total = 0;
  for (const number of list) {
    total += number;
  }

  return total / list.length;
}

module.exports = calculateMean;
