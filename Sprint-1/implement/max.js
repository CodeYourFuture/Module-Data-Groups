function findMax(elements) {
  if (!Array.isArray(elements)) return -Infinity;
  let max = -Infinity;

  for (const element of elements) {
    if (typeof element === "number") {
      if (element > max) {
        max = element;
      }
    }
  }

  return max;
}

module.exports = findMax;
