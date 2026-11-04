function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }

    sum += list[i];
  }

  return sum / list.length;
}

module.exports = calculateMean;
