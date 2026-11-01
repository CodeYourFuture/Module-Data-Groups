function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  for (let num of elements) {
    if (typeof num !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
  }
  return Math.max(...elements);
}

module.exports = findMax;
