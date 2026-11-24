function calculateMean(list) {
  // 1. Check that the input is an array
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  // 2. Check every array position
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }
  }

  // 3. Check for an empty array
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  // 4. Calculate the mean
  const total = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return total / list.length;
}

module.exports = calculateMean;
