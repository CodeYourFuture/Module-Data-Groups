function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  if (
    elements.some(
      (element) => typeof element !== "number" || Number.isNaN(elements)
    )
  ) {
    throw new Error("findMax requires an array of numbers");
  }
  return Math.max(...elements);
}

module.exports = findMax;
