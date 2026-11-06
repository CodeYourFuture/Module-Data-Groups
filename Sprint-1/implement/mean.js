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
  const sum = list.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return sum / list.length;
}

module.exports = calculateMean;
