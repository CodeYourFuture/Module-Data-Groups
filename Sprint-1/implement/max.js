function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  for (const item of elements) {
    if (Number.isNaN(item) || typeof item !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
  }
  if (elements.length === 0) {
    return -Infinity;
  }

  if (elements.length === 1) {
    return elements[0];
  }
  const sortedList = elements.toSorted((a, b) => a - b);
  return sortedList.at(-1);
}

module.exports = findMax;
