function calculateMean(list) {
  if (!Array.isArray(list)) {
    throw new Error("calculateMean requires an array of numbers");
  }
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMean requires an array of numbers");
    }
  }
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }
  if (list.length === 1) {
    return list[0];
  }

  let totalItem = 0;
  for (const item of list) {
    totalItem += item;
  }
  return totalItem / list.length;
}

module.exports = calculateMean;
