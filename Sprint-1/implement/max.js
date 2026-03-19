function findMax(elements) {
  let max = -Infinity;

  for (let i = 0; i < elements.length; i++) {
    if (
      typeof elements[i] === "number" &&
      !Number.isNaN(elements[i]) &&
      elements[i] > max
    ) {
      max = elements[i];
    }
  }
  return max;
}

module.exports = findMax;
