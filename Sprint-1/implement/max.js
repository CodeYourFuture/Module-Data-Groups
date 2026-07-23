function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) {
    return -Infinity;
  }
  const numbersOnly = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (numbersOnly.length === 0) {
    return -Infinity;
  }
  return Math.max(...numbersOnly);
}

module.exports = findMax;
