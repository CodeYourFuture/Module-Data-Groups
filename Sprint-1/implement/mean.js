function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }
  if (
    !list.every((number) => typeof number === "number" && !Number.isNaN(number))
  ) {
    throw new Error("calculateMean requires an array of numbers");
  }
  const total = list.reduce((runningTotal, number) => {
    return runningTotal + number;
  }, 0);

  return total / list.length;
}

module.exports = calculateMean;
