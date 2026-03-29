function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) return -Infinity;

  const numericValues = elements
    .filter(
      (item) =>
        (typeof item === "number" && !Number.isNaN(item)) ||
        (typeof item === "string" &&
          item.trim() !== "" &&
          !Number.isNaN(Number(item)))
    )
    .map(Number);

  return numericValues.length ? Math.max(...numericValues) : -Infinity;
}

module.exports = findMax;
