function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  for (const element of elements) {
    if (typeof element !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
  }

  return Math.max(...elements);
}

module.exports = findMax;
