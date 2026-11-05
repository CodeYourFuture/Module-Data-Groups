function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  if (!elements.every((v) => typeof v === "number" && !Number.isNaN(v))) {
    throw new Error("findMax requires an array of numbers");
  }
  let max = -Infinity;
  for (const value of elements) {
    if (value > max) max = value;
  }
  return max;
}

module.exports = findMax;
