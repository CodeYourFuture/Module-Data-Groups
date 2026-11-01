function findMax(elements) {
  for (let num of elements) {
    if (typeof num !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
  }
  return Math.max(...elements);
}

module.exports = findMax;
