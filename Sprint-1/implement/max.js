function findMax(elements) {
  let max = -Infinity;
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && Number.isFinite(elements[i])) {
      if (elements[i] > max) {
        max = elements[i];
      }
    }
  }
  return max;
}

module.exports = findMax;
