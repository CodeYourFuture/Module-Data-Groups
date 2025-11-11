function findMax(elements) {
  // ensure elements is an array
  if (!Array.isArray(elements)) {
    throw new Error("Input must be an array");
  }

  // filter out non-numeric values
  elements = elements.filter((element) => typeof element === "number");

  if (elements.length === 0) {
    return -Infinity;
  }
  if (elements.length === 1) {
    return elements[0];
  }

  return Math.max(...elements);
}

module.exports = findMax;
