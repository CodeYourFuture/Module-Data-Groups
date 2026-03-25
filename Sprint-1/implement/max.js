function findMax(elements) {
  if (!Array.isArray(elements)) return null;

  let maxValue = -Infinity;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && isFinite(elements[i])) {
      if (elements[i] > maxValue) {
        maxValue = elements[i];
      }
    }
  }

  return maxValue;
}

module.exports = findMax;
