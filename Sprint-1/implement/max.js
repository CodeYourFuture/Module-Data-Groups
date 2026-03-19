function findMax(elements) {
  if (elements.length === 0 && elements !== "number") return -Infinity;

  return Math.max(
    ...elements.filter(
      (item) => typeof item === "number" && !Number.isNaN(item)
    )
  );
}

module.exports = findMax;
