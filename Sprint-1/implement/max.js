function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }

  if (elements.length === 0) {
    return -Infinity;
  }

  if (!elements.every((item) => typeof item === "number")) {
    throw new Error("findMax requires an array of numbers");
  }

  let max = elements[0];
  for (const item of elements) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}

module.exports = findMax;
