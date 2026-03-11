function findMax(elements) {
  if (!Array.isArray(elements)) return null;

  const numbers = elements.filter(
    (x) => typeof x === "number" && Number.isFinite(x)
  );

  if (numbers.length === 0) return -Infinity;

  return Math.max(...numbers);
}

module.exports = findMax;