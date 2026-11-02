function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }

  if (elements.length === 0) {
    return -Infinity;
  }

  if (!elements.every((element) => typeof element === "number")) {
    throw new Error("findMax requires for all items to be numbers");
  }

  return Math.max(...elements);
}

module.exports = findMax;
