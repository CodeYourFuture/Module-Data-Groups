function findMax(elements) {
  if (
    !Array.isArray(elements) ||
    elements.some((item) => typeof item !== "number")
  ) {
    throw new Error("findMax requires an array of numbers");
  }
  let max = -Infinity;
  for (const item of elements) {
    if (item > max) max = item;
  }
  return max;
}

module.exports = findMax;
