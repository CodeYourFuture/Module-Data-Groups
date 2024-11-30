function findMax(elements) {
  if (elements.length === 0) return -Infinity;

  let max = -Infinity;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      max = Math.max(max, elements[i]);
    }
  }

  return max;
}

module.exports = findMax;
