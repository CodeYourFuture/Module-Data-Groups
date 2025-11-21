function findMax(elements) {
  if (!Array.isArray(elements)) return -Infinity;

  const numbers = elements.filter(
    (item) => typeof item === "number" && Number.isFinite(item)
  );

  if (numbers.length === 0) return -Infinity;

  return Math.max(...numbers);
}

module.exports = findMax;
