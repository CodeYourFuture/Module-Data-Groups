function calculateMean(list) {
  if (!Array.isArray(list) || list === "") {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  if (list.some((item) => typeof item === "string")) {
    throw new Error("calculateMean requires an array of numbers");
  }

  let sum = 0;
  for (const item of list) {
    sum += item;
  }

  const mean = sum / list.length;

  return mean;
}

module.exports = calculateMean;
