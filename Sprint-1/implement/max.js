function findMax(elements) {
  let max = -Infinity;

  for (const i of elements) {
    if (typeof i === "number" && !isNaN(i) && i > max) {
      max = i;
    }
  }

  return max;
}

module.exports = findMax;
