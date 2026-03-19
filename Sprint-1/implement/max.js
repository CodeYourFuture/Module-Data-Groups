function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) return -Infinity;
  return Math.max(
    ...elements.filter(
      (item) => typeof item === "number" && !Number.isNaN(item)
    )
  );
}

module.exports = findMax;
