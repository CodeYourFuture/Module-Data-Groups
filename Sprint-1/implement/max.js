function findMax(elements) {
  if (
    !Array.isArray(elements) ||
    elements.some((item) => typeof item !== "number" || Number.isNaN(item))
  ) {
    throw new Error("findMax requires an array of numbers");
  }

  return Math.max(...elements);
}

module.exports = findMax;