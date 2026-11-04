function calculateMean(list) {
  // 1. Check if input is a valid array
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }

  // 2. Check if the array is empty
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  // 3. Validate that every item in the array is strictly a number
  let sum = 0;
  for (const item of list) {
    if (typeof item !== "number" || Number.isNaN(item)) {
      throw new Error("calculateMean requires an array of numbers");
    }
    sum += item;
  }

  // 4. Return the calculated mean
  return sum / list.length;
}

module.exports = calculateMean;