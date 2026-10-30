function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  if (
    !list.every(
      (currentValue) =>
        typeof currentValue === "number" && !Number.isNaN(currentValue)
    )
  ) {
    throw new Error("calculateMean requires an array of numbers");
  }
  
  let total = 0;

  for (number of list) {
    total += number;
  }
  const mean = total / list.length;

  return mean;
}

module.exports = calculateMean;
