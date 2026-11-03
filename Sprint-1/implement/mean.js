function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length == 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  if (!list.every((item) => typeof item === "number")) {
    throw new Error("calculateMean requires an array of numbers");
  }

  let sum = list.reduce((a, b) => a + b, 0);

  let meanResult = sum / list.length;
  return meanResult;
}

module.exports = calculateMean;
