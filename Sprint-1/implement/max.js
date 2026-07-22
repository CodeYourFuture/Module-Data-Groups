function findMax(elements) {
  let max = -Infinity;

  for (const element of elements) {
    if (typeof element === "number" && element > max) {
      max = element;
    }
  }

  return max;
}

module.exports = findMax;