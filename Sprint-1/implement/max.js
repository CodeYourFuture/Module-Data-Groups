function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) {
    return -Infinity;
  }
  let max = -Infinity;

  for (const item of elements) {
    if (typeof item === "number" && !Number.isNaN(item)) {
      if (item > max) {
        max = item;
      }
    }
  }

  return max;
}

module.exports = findMax;
