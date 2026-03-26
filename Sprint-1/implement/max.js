function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number" && !isNaN(elements[i])) {
      if (elements[i] > max) {
        max = elements[i];
      }
    }
  }
  if (max === -Infinity) {
    return null;
  }
  return max;
}

module.exports = findMax;
