function findMax(elements) {
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

  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }

  sortedElements = elements.toSorted((a, b) => a - b);

  return sortedElements[sortedElements.length - 1];
}

module.exports = findMax;
