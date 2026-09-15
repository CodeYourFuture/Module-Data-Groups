function findMax(list) {
  if (!Array.isArray(list)) {
    throw new Error("findMax requires an array of numbers");
  }

  if (!list.every((item) => typeof item === "number" && !Number.isNaN(item))) {
    throw new Error("findMax requires an array of numbers");
  }

  return Math.max(...list);
}

module.exports = findMax;
