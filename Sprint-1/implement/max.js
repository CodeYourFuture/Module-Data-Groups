function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  if (elements.some((element) => typeof element === "string")) {
    throw new Error("findMax requires an array of numbers");
  }
  return Math.max(...elements);
}
module.exports = findMax;
