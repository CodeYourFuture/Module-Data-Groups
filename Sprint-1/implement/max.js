function findMax(elements) {
  if (!Array.isArray(elements)) {
    return -Infinity;
  }

  const numericValues = elements.filter(
    (val) => typeof val === "number" && !isNaN(val)
  );

  if (numericValues.length === 0) {
    return -Infinity;
  }

  return Math.max(...numericValues);
}

module.exports = findMax;
