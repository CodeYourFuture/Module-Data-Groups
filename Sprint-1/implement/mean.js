function calculateMean(list) {
  if (list === undefined) {
    throw new Error("calculateMean requires an array of numbers");
  }
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }
  let total = 0;
  for (const elements of list) {
    if (typeof elements !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }
    total = total + elements;
  }
  return total / list.length;
}

module.exports = calculateMean;
