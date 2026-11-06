function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  for (const element of list) {
    if (!Number.isFinite(element)) {
      throw new Error("calculateMean requires an array of numbers");
    }
  }

  let sum = 0;

  list.forEach((item) => {
    sum += item;
  });

  const mean = sum / list.length;

  return mean;
}

module.exports = calculateMean;
