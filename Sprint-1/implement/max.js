function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }

  if (elements.length === 0) {
    return -Infinity;
  }

  if (
    !elements.every(
      (currentValue) =>
        typeof currentValue === "number" && !Number.isNaN(currentValue)
    )
  ) {
    throw new Error("findMax requires an array of numbers");
  }

  return Math.max(...elements);
}

module.exports = findMax;
