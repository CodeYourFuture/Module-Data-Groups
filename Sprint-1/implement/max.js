function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  for (const items of elements) {
    if (typeof items !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
  }
  if (elements.length === 0) {
    return -Infinity;
  }
  if (elements.length === 1) {
    return elements[0];
  }
  let max = elements[0];
  for (const items of elements) {
    if (items > max) {
      max = items;
    }
  }
  return max;
}

module.exports = findMax;
